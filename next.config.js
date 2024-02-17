/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/React-D3-VizHub-Interactive-Data-Insights',
  assetPrefix: '/React-D3-VizHub-Interactive-Data-Insights/',
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: '',
  },
  compiler: {
    styledComponents: true
  },
  trailingSlash: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/covid19-dashboard': { page: '/covid19-dashboard' },
      '/korea-crop-production': { page: '/korea-crop-production' },
      '/most-populated-countries': { page: '/most-populated-countries' },
      '/literacy-rates-by-country': { page: '/literacy-rates-by-country' }
    }
  }
}

module.exports = nextConfig
