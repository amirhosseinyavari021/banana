const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/banana", 
  assetPrefix: "/banana/",
};

module.exports = nextConfig;
