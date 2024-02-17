#!/bin/bash

# Install nvm and Node.js 18
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18

# Fix git issues
git checkout main
git pull origin main
git merge fix-build
git push -f origin main

# Clean install
rm -rf node_modules
rm package-lock.json

# Update package.json
cat > package.json << 'INNEREOF'
{
  "name": "react-data-visualization",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://DeshDeepakKant.github.io/React-D3-VizHub-Interactive-Data-Insights",
  "engines": {
    "node": ">=18"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next build && next export",
    "deploy": "npm run export && touch out/.nojekyll && gh-pages -d out -t true"
  },
  "dependencies": {
    "d3": "^7.8.5",
    "next": "^14.0.4",
    "prop-types": "^15.8.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "styled-components": "^6.1.1",
    "topojson-client": "^3.1.0"
  },
  "devDependencies": {
    "gh-pages": "^6.1.0"
  }
}
INNEREOF

# Install dependencies
npm install

# Commit and push changes
git add .
git commit -m "Update Node.js version and dependencies"
git push -f origin main

# Deploy
npm run deploy
