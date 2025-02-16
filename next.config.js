const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/banana", // نام ریپوی گیت‌هاب
  assetPrefix: "/banana/",
};

module.exports = nextConfig;
