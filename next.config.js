/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/banana", // این باید به نام ریپو شما اشاره کنه
  assetPrefix: "/banana", // برای فایل‌های استاتیک
};
