/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    const paths = {
      '/': { page: '/' },
    };
    return paths;
  },
  reactStrictMode: true,
  images:{
    unoptimized: true,
    domains: [""], 
  },
}
