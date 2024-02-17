#!/bin/bash

# Create next.config.js
echo '/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/React-D3-VizHub-Interactive-Data-Insights",
  images: {
    unoptimized: true,
  },
}
module.exports = nextConfig' > next.config.js

# Install dependencies
npm install --save-dev gh-pages

# Create .nojekyll file
touch .nojekyll

# Build
npm run build

# Ensure out directory exists
mkdir -p out

# Copy .nojekyll to out
cp .nojekyll out/

# Deploy
npx gh-pages -d out -t true

echo "Deployment complete! Please wait a few minutes for GitHub Pages to update."
