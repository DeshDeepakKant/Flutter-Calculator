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
  trailingSlash: true
}

module.exports = nextConfig
