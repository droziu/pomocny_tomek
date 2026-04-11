import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    /** Mniej „render-blocking” CSS: style wbudowane w HTML (App Router). */
    inlineCss: true,
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
