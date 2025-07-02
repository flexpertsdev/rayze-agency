# Rayze Agency Website

A high-performance digital marketing agency website built with modern web technologies, featuring Manza-style animations and Yaser.UK content strategy.

## 🚀 Tech Stack

- **Build Tool**: Vite
- **Styling**: Tailwind CSS + SCSS
- **Animations**: GSAP + ScrollTrigger
- **Smooth Scroll**: Lenis
- **Deployment**: Netlify
- **Functions**: Netlify Functions (Edge)

## 📦 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Netlify
npm run deploy:prod
```

## 🏗️ Project Structure

```
rayze-agency/
├── src/
│   ├── assets/          # Images, fonts, icons
│   ├── styles/          # SCSS styles
│   │   ├── base/        # Reset, typography, animations
│   │   ├── components/  # Component styles
│   │   └── utilities/   # Helper classes
│   ├── scripts/         # JavaScript modules
│   │   ├── components/  # UI components
│   │   ├── animations/  # Animation controllers
│   │   └── utils/       # Utilities
│   └── pages/          # Page templates
├── public/             # Static assets
├── netlify/            # Serverless functions
└── dist/               # Build output
```

## 🎨 Design System

- **Primary Black**: #000000
- **Secondary Black**: #1a1a1a
- **Brand Green**: #00ff88
- **Text Grey**: #999999
- **White**: #ffffff

## 🚀 Features

- Manza-style text animations
- Dark theme with green accents
- Smooth scrolling experience
- Performance optimized
- SEO ready
- Accessible
- Responsive design
- Contact form
- Newsletter signup

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## 🛠️ Development

### Adding a New Page

1. Create HTML file in root
2. Add to Vite config input
3. Create page-specific styles
4. Add navigation link

### Modifying Animations

Edit animation configs in:
- `src/styles/base/_animations.scss`
- `src/scripts/animations/animation-controller.js`

### Updating Content

Service data: `src/scripts/data/services.js`

## 📝 License

MIT License - feel free to use for your projects!