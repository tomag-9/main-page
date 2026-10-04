import { translations } from "@/lib/translations";

export const metadata = {
  title: "Content - Tomáš Magula",
  description: "Plain text content for AI accessibility",
  robots: {
    index: true,
    follow: true,
  },
};

function flattenContent(obj: any, prefix = ""): Array<[string, string]> {
  const items: Array<[string, string]> = [];

  if (!obj || typeof obj !== "object") {
    return items;
  }

  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      items.push([path, value]);
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        const itemPath = `${path}[${index}]`;
        if (typeof item === "string") {
          items.push([itemPath, item]);
        } else if (typeof item === "object" && item !== null) {
          items.push(...flattenContent(item, itemPath));
        }
      });
    } else if (value !== null && typeof value === "object") {
      items.push(...flattenContent(value, path));
    }
  }

  return items;
}

export default function ContentPage() {
  const enItems = flattenContent(translations.en);
  const skItems = flattenContent(translations.sk);

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px", fontFamily: "monospace", fontSize: "13px", lineHeight: "1.5" }}>
      <h1>Tomáš Magula - Portfolio Content</h1>
      <p>This page contains all portfolio content in plain text format for AI accessibility.</p>
      <p>
        <strong>Also available:</strong> <a href="/content.json">JSON format</a> | <a href="/content.txt">Text format</a>
      </p>
      <hr />

      <section>
        <h2>English Content</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #ccc" }}>
              <th style={{ textAlign: "left", padding: "8px", borderRight: "1px solid #ddd" }}>Key</th>
              <th style={{ textAlign: "left", padding: "8px" }}>Value</th>
            </tr>
          </thead>
          <tbody>
            {enItems.map(([key, value], i) => (
              <tr key={`en-${i}`} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "8px", borderRight: "1px solid #ddd", fontWeight: "bold" }}>{key}</td>
                <td style={{ padding: "8px" }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={{ margin: "40px 0" }} />

      <section>
        <h2>Slovak Content</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #ccc" }}>
              <th style={{ textAlign: "left", padding: "8px", borderRight: "1px solid #ddd" }}>Key</th>
              <th style={{ textAlign: "left", padding: "8px" }}>Value</th>
            </tr>
          </thead>
          <tbody>
            {skItems.map(([key, value], i) => (
              <tr key={`sk-${i}`} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "8px", borderRight: "1px solid #ddd", fontWeight: "bold" }}>{key}</td>
                <td style={{ padding: "8px" }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
