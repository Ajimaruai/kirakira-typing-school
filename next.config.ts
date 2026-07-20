import type { NextConfig } from "next";

// GitHub Pagesのプロジェクトサイトでは、URLにリポジトリ名が入ります。
// リポジトリ名はまだ未確定なので、公開時にPAGES_BASE_PATHから受け取ります。
const pagesBasePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: pagesBasePath,
  assetPrefix: pagesBasePath || undefined,
  env: { NEXT_PUBLIC_BASE_PATH: pagesBasePath },
  images: { unoptimized: true },
};

export default nextConfig;
