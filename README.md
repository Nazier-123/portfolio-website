# Portfolio Website - React Version

A modern, responsive portfolio website built with React, showcasing projects, skills, and contact information.

## Features

- 🎨 **Dark/Light Theme Toggle** - Switch between themes with persistent storage
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Smooth Animations** - Scroll-triggered animations and transitions
- 🎯 **Interactive Projects Showcase** - Spotlight carousel with featured projects
- 📊 **Skills Visualization** - Animated progress bars for technical skills
- 📧 **Contact Form** - Get in touch form (ready for backend integration)

## Projects Featured

1. **StudyMate - AI Study Assistant** - AI-powered study platform
2. **Halal Restaurant Finder** - Location-based restaurant discovery app
3. **Calculator Without JavaScript** - Pure HTML/CSS calculator
4. **Project H - Isometric Dungeon Crawler** - Unity game development
5. **Gen.G Fanmade Website** - Esports organization fan site
6. **Fork & Flame** - Cape Coloured fine dining restaurant website

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
portfolio-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── assets/
│   │   └── Gen.G_logo.png
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Technologies Used

- React 18
- CSS3 (Custom Properties, Grid, Flexbox)
- Font Awesome Icons
- Google Fonts (Inter)

## Customization

- Update personal information in component files
- Modify colors in `src/index.css` CSS variables
- Add/remove projects in `src/components/Projects.js`
- Update skills in `src/components/Skills.js`

## License

This project is open source and available under the MIT License.
