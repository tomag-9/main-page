import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://tomag.xyz";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
