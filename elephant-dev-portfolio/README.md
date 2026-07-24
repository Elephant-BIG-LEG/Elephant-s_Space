# Elephant.dev — Personal Portfolio

A modern, lightweight personal portfolio website for a Backend Engineer & AI Application Developer. Built with React 18 + Vite, optimized for performance and GitHub Pages deployment.

![Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Vite](https://img.shields.io/badge/Vite-6-blue)
![React-18](https://img.shields.io/badge/React-18-purple)

## Features

- **Minimal dependencies** — Only React + Vite, no heavy UI frameworks
- **Dark tech aesthetic** — Clean, modern developer portfolio style
- **Fully responsive** — Optimized for desktop and mobile
- **CSS-only animations** — No framer-motion or heavy animation libraries
- **Inline SVG icons** — Zero icon library dependencies
- **Fast load** — Optimized bundle, code-split CSS, minimal JS

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Build Tool | Vite 6 |
| Styling | Native CSS (CSS Variables) |
| Icons | Inline SVG |
| Deployment | GitHub Pages |

## Local Development

`ash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
`

## Project Structure

`
elephant-dev-portfolio/
├── index.html              # Entry HTML
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
├── src/
│   ├── main.jsx            # React entry
│   ├── App.jsx             # Root component
│   ├── App.css             # Shared styles
│   ├── index.css           # Global styles & variables
│   └── components/
│       ├── Nav.jsx         # Navigation bar
│       ├── Hero.jsx        # Hero / landing section
│       ├── About.jsx       # About me section
│       ├── Skills.jsx      # Tech stack display
│       ├── Projects.jsx    # Project cards
│       ├── Journey.jsx     # Engineering timeline
│       └── Contact.jsx     # Contact links + footer
├── public/
│   └── vite.svg            # Favicon
└── README.md
`

## GitHub Pages Deployment

### Option 1: Manual Deploy

`ash
# Build the project
npm run build

# The dist/ folder contains the production build
# Upload contents of dist/ to your repo's root
`

1. Create a repository named <username>.github.io (or any name)
2. Push the dist/ folder contents to the main branch
3. Enable GitHub Pages in repository Settings → Pages → Source: main / /docs (root)

### Option 2: Using gh-pages package

`ash
npm install --save-dev gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

npm run deploy
`

### Vite Configuration

The ase in ite.config.js is set to '/elephant-dev-portfolio/' for subpath deployment.

- For <username>.github.io repos: change to '/'
- For <username>.github.io/elephant-dev-portfolio: keep as '/elephant-dev-portfolio/'

## Performance

| Metric | Target |
|--------|--------|
| Bundle size | < 50KB gzipped |
| Dependencies | 2 runtime (react, react-dom) |
| CSS framework | None (custom) |
| Animation library | None (CSS only) |
| Icon library | None (inline SVG) |

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT
