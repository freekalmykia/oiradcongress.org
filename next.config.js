/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en'
  },
  images: {
    domains: ['img.youtube.com']
  }
}

module.exports = nextConfig
