// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // produce static site into /out
  images: { unoptimized: true }, // GH Pages has no image optimizer
  // ❌ No basePath/assetPrefix for user site
  // trailingSlash: true, // optional; enable only if you prefer /path/ URLs
};
export default nextConfig;
