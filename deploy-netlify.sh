#!/bin/bash

# Netlify Deployment Script
echo "🚀 Starting Netlify Deployment..."

# Build the project
echo "📦 Building project..."
npm run build

# Deploy to Netlify
echo "🌐 Deploying to Netlify..."
npx netlify-cli deploy --prod --dir=dist

echo "✅ Deployment complete!"

