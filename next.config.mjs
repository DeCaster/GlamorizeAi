/** 
 * @type {import('next').NextConfig} 
 * Next.js 13 için örnek konfigürasyon
 */
const nextConfig = {
  // React'ın bazı hataları daha sıkı yakalaması için önerilen ayar
  reactStrictMode: true,

  // SWC tabanlı minify (küçültme) işlemini etkinleştirir
  swcMinify: true,

  // Deneysel özellikler
  experimental: {
    // app/ dizinini etkinleştirir (Next.js 13 App Router)
    appDir: true,
  },

  /**
   * ESLint ayarları
   */
  eslint: {
    // true yaparsanız, ESLint hataları build'i durdurmaz, sadece uyarı çıkar
    ignoreDuringBuilds: false, 
    // veya true derseniz ESLint hatalarına rağmen build devam eder
    // ignoreDuringBuilds: true,
  },

  /**
   * Gerekliyse diğer ayarları da ekleyebilirsiniz. Örneğin:
   * images: {
   *   domains: ['example.com'], // Dış domainlerden resim çekiyorsanız
   * },
   * compiler: {
   *   styledComponents: true,   // styled-components kullanıyorsanız
   * },
   */
};

export default nextConfig;
