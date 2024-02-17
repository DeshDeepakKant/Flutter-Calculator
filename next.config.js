/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/React-D3-VizHub-Interactive-Data-Insights',
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true
  },
  reactStrictMode: true
}

module.exports = nextConfig
