#!/bin/bash

# Deployment script for Rayze Agency

echo "🚀 Starting deployment process..."

# Check if on main branch
CURRENT_BRANCH=$(git branch --show-current 2>/dev/null)
if [ "$CURRENT_BRANCH" != "main" ] && [ "$1" != "--force" ]; then
    echo "⚠️  Warning: Not on main branch (current: $CURRENT_BRANCH)"
    echo "Use --force to deploy anyway"
    exit 1
fi

# Run build
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

# Check build output
if [ ! -d "dist" ]; then
    echo "❌ Build directory not found"
    exit 1
fi

# Deploy to Netlify
echo "🌐 Deploying to Netlify..."
if [ "$1" == "--prod" ] || [ "$2" == "--prod" ]; then
    netlify deploy --prod
else
    netlify deploy
fi

echo "✅ Deployment complete!"