import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Nazier. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/Nazier-123" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nazier-abdurahman-1551a3266"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:nazierabdurahman2@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

