import { translations } from "@/lib/i18n";

export const metadata = {
  title: "Content - Tomáš Magula",
  description: "Plain text content for AI accessibility",
  robots: {
    index: true,
    follow: true,
  },
};

function renderContent(obj: any, depth = 0): React.ReactNode[] {
  const items: React.ReactNode[] = [];
  const indent = "  ".repeat(depth);

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "string") {
      items.push(
        <div key={`${key}-string`} style={{ marginLeft: `${depth * 20}px` }}>
          <strong>{key}:</strong> {value}
        </div>
      );
    } else if (Array.isArray(value)) {
      items.push(
        <div key={`${key}-array`} style={{ marginLeft: `${depth * 20}px` }}>
          <strong>{key}:</strong>
        </div>
      );
      value.forEach((item, index) => {
        if (typeof item === "string") {
          items.push(
            <div key={`${key}-${index}`} style={{ marginLeft: `${(depth + 1) * 20}px` }}>
              [{index}] {item}
            </div>
          );
        } else if (typeof item === "object") {
          items.push(
            <div key={`${key}-${index}-obj`} style={{ marginLeft: `${(depth + 1) * 20}px` }}>
              {renderContent(item, depth + 2)}
            </div>
          );
        }
      });
    } else if (typeof value === "object") {
      items.push(
        <div key={`${key}-obj`} style={{ marginLeft: `${depth * 20}px` }}>
          <strong>{key}:</strong>
        </div>
      );
      items.push(
        <div key={`${key}-obj-content`}>{renderContent(value, depth + 1)}</div>
      );
    }
  }

  return items;
}

export default function ContentPage() {
  return (
    <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px", fontFamily: "monospace", fontSize: "14px", lineHeight: "1.6" }}>
      <h1>Tomáš Magula - Portfolio Content</h1>
      <p>This page contains all portfolio content in plain text format for AI accessibility.</p>
      <hr />

      <section>
        <h2>English Content</h2>
        {renderContent(translations.en)}
      </section>

      <hr />

      <section>
        <h2>Slovak Content</h2>
        {renderContent(translations.sk)}
      </section>
    </main>
  );
}
