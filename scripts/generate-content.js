#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Read translations from the source file
const i18nPath = path.join(__dirname, "../src/lib/i18n.tsx");
const i18nContent = fs.readFileSync(i18nPath, "utf-8");

// Extract the translations object using regex
const translationsMatch = i18nContent.match(
  /export const translations = ({[\s\S]*?}) as const;/
);

if (!translationsMatch) {
  console.error("Could not find translations object in i18n.tsx");
  process.exit(1);
}

// Evaluate the translations object
const translationsCode = translationsMatch[1];
const translations = eval(`(${translationsCode})`);

// Ensure public directory exists
const publicDir = path.join(__dirname, "../public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate JSON file
const jsonPath = path.join(publicDir, "content.json");
fs.writeFileSync(
  jsonPath,
  JSON.stringify(
    {
      meta: {
        site: "tomag.xyz",
        author: "Tomáš Magula",
        languages: ["en", "sk"],
        updatedAt: new Date().toISOString(),
      },
      content: translations,
    },
    null,
    2
  )
);
console.log(`✓ Generated ${jsonPath}`);

// Generate plain text file
function flattenObject(obj, prefix = "") {
  const lines = [];

  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      lines.push(`${path}: ${value}`);
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (typeof item === "string") {
          lines.push(`${path}[${index}]: ${item}`);
        } else if (typeof item === "object") {
          lines.push(...flattenObject(item, `${path}[${index}]`));
        }
      });
    } else if (typeof value === "object") {
      lines.push(...flattenObject(value, path));
    }
  }

  return lines;
}

const enLines = flattenObject(translations.en);
const skLines = flattenObject(translations.sk);

const textContent = `# Tomáš Magula - Portfolio Content

## English (EN)
${enLines.join("\n")}

## Slovak (SK)
${skLines.join("\n")}
`;

const textPath = path.join(publicDir, "content.txt");
fs.writeFileSync(textPath, textContent);
console.log(`✓ Generated ${textPath}`);
