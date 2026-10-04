import { translations } from "@/lib/i18n";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

function flattenObject(obj: any, prefix = ""): string[] {
  const lines: string[] = [];

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

export async function GET() {
  const enLines = flattenObject(translations.en);
  const skLines = flattenObject(translations.sk);

  const content = `# Tomáš Magula - Portfolio Content

## English (EN)
${enLines.join("\n")}

## Slovak (SK)
${skLines.join("\n")}
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
