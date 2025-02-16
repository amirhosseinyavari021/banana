/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // حالت Strict برای دیباگ بهتر
  trailingSlash: true, // اضافه کردن / به انتهای URL
  output: "export", // تولید خروجی استاتیک
  images: {
    unoptimized: true, // حل مشکل تصاویر در GitHub Pages
  },
  basePath: "/banana", // نام ریپو گیت‌هاب رو اینجا بذار
  assetPrefix: "/banana", // برای فایل‌های استاتیک
};

module.exports = nextConfig;
