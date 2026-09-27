import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This site has no server-side routes, so Pages can serve plain files.
  output: "export",
  images: {
    // The default Next.js image optimizer requires a runtime server.
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
