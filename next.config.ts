import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态导出，便于部署到 Netlify 等纯静态托管平台
  output: "export",
  // 静态导出下关闭图片优化，头像等图片直接使用原始资源
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
