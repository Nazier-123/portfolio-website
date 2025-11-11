import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [typedName, setTypedName] = useState('');

  useEffect(() => {
    const fullName = 'Nazier Abdurahman';
    let i = 0;
    const type = () => {
      if (i <= fullName.length) {
        setTypedName(fullName.slice(0, i));
        i++;
        setTimeout(type, 80);
      }
    };
    setTimeout(type, 800);
  }, []);

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
  };

  const renderCode = () => {
    const codeLines = [
      'class Developer {',
      '    constructor() {',
      '        this.name = "', // This will be handled specially
      '        this.degree = "CS + Data Analytics";',
      '        this.passion = "Building Amazing Things";',
      '    }',
      '    ',
      '    code() {',
      '        return "Creating the future";',
      '    }',
      '}'
    ];
    
    return codeLines.map((line, idx) => {
      if (idx === 2) {
        // This is the line with the name
        const beforeName = '        this.name = "';
        const afterName = '";';
        return (
          <React.Fragment key={idx}>
            {beforeName}
            <span className="string">{typedName}</span>
            {typedName.length < 'Nazier Abdurahman'.length && <span className="code-caret">|</span>}
            {afterName}
            {'\n'}
          </React.Fragment>
        );
      }
      return <React.Fragment key={idx}>{line}{'\n'}</React.Fragment>;
    });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Nazier</span>
          </h1>
          <h2 className="hero-subtitle">Software Developer Intern</h2>
          <p className="hero-description">
            Computer Science graduate with a Post Graduate Diploma in Data Analytics.
            Passionate about creating innovative solutions through code and leveraging data-driven insights.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" onClick={(e) => handleNavClick(e, 'projects')}>
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => handleNavClick(e, 'contact')}>
              Get In Touch
            </a>
          </div>
          <div className="social-links">
            <a href="https://github.com/Nazier-123" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/nazier-abdurahman-1551a3266" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:nazierabdurahman2@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="code-window">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="code-content">
              {renderCode()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

