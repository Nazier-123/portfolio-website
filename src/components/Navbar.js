import React, { useState, useEffect } from 'react';

const Navbar = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.clientHeight;
          if (scrollY >= sectionTop - 200) {
            setActiveSection(section);
          }
        }
      });

      // Update navbar background on scroll
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        const scrolled = scrollY > 50;
        if (isDark) {
          navbar.style.background = scrolled
            ? 'rgba(13, 18, 38, 0.92)'
            : 'rgba(13, 18, 38, 0.80)';
          navbar.style.boxShadow = scrolled
            ? '0 8px 24px rgba(0, 0, 0, 0.35)'
            : '0 2px 12px rgba(0, 0, 0, 0.25)';
        } else {
          navbar.style.background = scrolled
            ? 'rgba(255, 255, 255, 0.98)'
            : 'rgba(255, 255, 255, 0.95)';
          navbar.style.boxShadow = scrolled
            ? '0 4px 20px rgba(0, 0, 0, 0.1)'
            : '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDark]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
            Nazier Abdurahman
          </a>
        </div>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
          <ul className="nav-list">
            <li>
              <a
                href="#home"
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'skills')}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'}></i>
        </button>
        <div
          className="nav-toggle"
          id="navToggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span style={{
            transform: isMenuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : ''
          }}></span>
          <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
          <span style={{
            transform: isMenuOpen ? 'rotate(45deg) translate(-5px, -6px)' : ''
          }}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

