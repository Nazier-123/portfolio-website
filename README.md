# Portfolio Website

A modern, responsive portfolio website for showcasing your projects, skills, and professional information.

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Dynamic navigation, scroll animations, and hover effects
- **Project Showcase**: Dedicated section for displaying your best work
- **Skills Display**: Visual representation of your technical skills
- **Contact Form**: Built-in contact form for potential clients/employers
- **Performance Optimized**: Fast loading times with optimized code

## 📁 File Structure

```
portfolio-website/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md          # Documentation
```

## 🚀 Getting Started

1. **Open the website**: Simply double-click on `index.html` to open it in your browser

2. **For development**: If you want to use a local server (recommended for development):
   - Install a local server like Live Server (VS Code extension)
   - Or use Python: `python -m http.server 8000`
   - Or use Node.js: `npx http-server`

## 🎨 Customization Guide

### Personal Information
1. **Update your name**: 
   - Find "Nazier" in `index.html` and replace with your name
   - Update the title tag: `<title>Your Name - Portfolio</title>`

2. **Update contact information**:
   - Email: Search for "your.email@example.com" and replace
   - Phone: Search for "+1 (555) 123-4567" and replace
   - Location: Update "Your City, Country"

3. **Social Media Links**:
   - GitHub: Replace "https://github.com/yourusername"
   - LinkedIn: Replace "https://linkedin.com/in/yourusername"
   - Add other platforms as needed

### About Section
- Update the about me text in the "About Section" of `index.html`
- Replace the placeholder image URL with your photo
- Update the statistics (projects completed, technologies mastered, etc.)

### Projects
1. **Add your projects**:
   - Each project is in a `project-card` div
   - Update project titles, descriptions, and technologies used
   - Add real project URLs for "Live Demo" and "GitHub" links
   - Replace placeholder images with screenshots of your projects

2. **Project Images**:
   - Recommended size: 600x400 pixels
   - You can use services like:
     - Screenshot tools for project captures
     - Placeholder services temporarily
     - Upload to image hosting services

### Skills
- Update the skill categories and individual skills in the "Skills Section"
- Adjust skill percentages by changing the `width` value in style attribute
- Add or remove skills as needed

### Color Scheme
To change the color scheme, edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #4F46E5;      /* Main brand color */
    --secondary-color: #06B6D4;    /* Accent color */
    --text-primary: #1F2937;       /* Main text color */
    --text-secondary: #6B7280;     /* Secondary text color */
    --background: #FFFFFF;         /* Main background */
    --background-alt: #F9FAFB;     /* Alternative background */
}
```

## 📧 Contact Form Setup

The contact form currently shows an alert when submitted. To make it functional:

1. **EmailJS** (Free option):
   - Sign up at https://www.emailjs.com/
   - Follow their documentation to integrate
   - Update the form submission in `script.js`

2. **Formspree** (Simple option):
   - Sign up at https://formspree.io/
   - Get your form endpoint
   - Update the form action in `index.html`

3. **Backend API**:
   - Create your own backend endpoint
   - Update the form submission logic in `script.js`

## 🖼️ Adding Images

1. Create an `images` folder in your project directory
2. Add your images there
3. Update image paths in HTML:
   ```html
   <img src="images/your-photo.jpg" alt="Your Name">
   ```

## 📱 Mobile Optimization

The website is fully responsive. The mobile menu can be customized in:
- `script.js` - Mobile menu toggle functionality
- `styles.css` - Media queries section for responsive breakpoints

## 🔧 Browser Compatibility

The website works on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This portfolio template is free to use for personal and commercial projects.

## 💡 Tips

1. **Performance**: Optimize images before uploading (use tools like TinyPNG)
2. **SEO**: Add meta descriptions and keywords in the HTML head
3. **Analytics**: Add Google Analytics to track visitors
4. **Hosting**: Deploy on GitHub Pages, Netlify, or Vercel for free
5. **Domain**: Consider getting a custom domain for professionalism

## 🤝 Need Help?

If you need help customizing this portfolio:
1. Check the comments in the code for guidance
2. Use browser developer tools to inspect elements
3. Test changes locally before deploying

---

Good luck with your portfolio! 🚀
