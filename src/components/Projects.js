import React, { useState, useEffect } from 'react';
import genGLogo from '../assets/Gen.G_logo.png';

const Projects = () => {
  const [spotlightIndex, setSpotlightIndex] = useState(0);

  const spotlightProjects = [
    {
      badge: 'AI + Education',
      title: 'StudyMate — AI Study Assistant',
      description: 'Upload textbooks, slides, and notes; chat with an AI about your work; auto-generate flashcards. Built for deep learning, not shallow answers.',
      tags: ['React', 'Node', 'OpenAI', 'MongoDB'],
      github: 'https://github.com/Nazier-123/StudyMate',
      gradient: 'gradient-sm'
    },
    {
      badge: 'Geo + Lifestyle',
      title: 'Halal Restaurant Finder',
      description: 'Find halal restaurants near you with live geolocation, ratings and smart filters. Designed for fast decisions on the go.',
      tags: ['React', 'Maps', 'Geolocation', 'Node'],
      github: 'https://github.com/Nazier-123/restaurant-finder',
      gradient: 'gradient-gs'
    },
    {
      badge: 'Game Dev',
      title: 'Project H — Isometric Dungeon Crawler',
      description: 'Adrenaline roguelike hack-and-slash. Procedural levels, ability upgrades, relentless enemies. Built with Unity/C#.',
      tags: ['Unity', 'C#', 'Roguelike'],
      itch: 'https://nazier-123.itch.io/project-h-phase-2',
      gradient: 'gradient-ph'
    },
    {
      badge: 'Web Design',
      title: 'Gen.G Fanmade Website',
      description: 'A fanmade website showcasing Gen.G esports organization. Features team rosters, match schedules, and team history with a modern, sleek design.',
      tags: ['React', 'CSS', 'Web Design'],
      github: 'https://github.com/Nazier-123/GenG_Portfolio',
      live: 'https://gen-g-portfolio.vercel.app',
      gradient: 'gradient-geng'
    },
    {
      badge: 'Culinary + Culture',
      title: 'Fork & Flame',
      description: 'A sophisticated restaurant website showcasing Cape Coloured culture blended with fine dining. Features menu displays, cultural storytelling, and elegant design that honors heritage through modern web experiences.',
      tags: ['React', 'Web Design', 'Cultural Design'],
      github: 'https://github.com/Nazier-123/forkAndFlame',
      gradient: 'gradient-restaurant'
    }
  ];

  const allProjects = [
    {
      title: 'StudyMate - AI Study Assistant',
      description: 'An innovative AI-powered study platform that helps students by allowing them to upload study materials (textbooks, slides, notes) and interact with an intelligent chatbot. Features include automated flashcard generation and personalized study assistance.',
      tech: ['React', 'Node.js', 'AI/ML', 'OpenAI API', 'MongoDB'],
      github: 'https://github.com/Nazier-123/StudyMate'
    },
    {
      title: 'Halal Restaurant Finder',
      description: 'A location-based mobile application that helps users discover halal restaurants in their area. Features include real-time location tracking, restaurant reviews, ratings, and detailed filtering options to find the perfect dining experience.',
      tech: ['JavaScript', 'Geolocation API', 'Google Maps API', 'React', 'Node.js'],
      github: 'https://github.com/Nazier-123/restaurant-finder'
    },
    {
      title: 'Calculator Without JavaScript',
      description: 'An experimental project creating a fully functional calculator using only HTML and CSS, without any JavaScript. This unique approach demonstrates creative problem-solving and deep understanding of CSS capabilities including CSS Grid, custom properties, and advanced selectors.',
      tech: ['HTML5', 'CSS3', 'CSS Grid', 'No JavaScript'],
      github: 'https://github.com/Nazier-123/calculator-no-js'
    },
    {
      title: 'Project H - Isometric Dungeon Crawler',
      description: 'An adrenaline-fueled isometric roguelike hack-and-slash game. Slay relentless hordes of enemies to unlock powerful stat-boosting items and unleash devastating ability upgrades as you fight your way to glory. Features procedural level generation and intense combat mechanics.',
      tech: ['Unity', 'C#', 'Game Development', 'Isometric Design', 'Roguelike'],
      itch: 'https://nazier-123.itch.io/project-h-phase-2'
    },
    {
      title: 'Gen.G Fanmade Website',
      description: 'A fanmade website showcasing Gen.G esports organization. Features team rosters, match schedules, team history, and player profiles with a modern, sleek design inspired by professional esports websites.',
      tech: ['React', 'CSS', 'Web Design', 'Responsive Design'],
      github: 'https://github.com/Nazier-123/GenG_Portfolio',
      live: 'https://gen-g-portfolio.vercel.app'
    },
    {
      title: 'Fork & Flame',
      description: 'A sophisticated restaurant website that beautifully blends Cape Coloured culture with fine dining experiences. Features elegant menu displays, cultural storytelling, reservation system, and a design that honors heritage while embracing modern culinary excellence.',
      tech: ['React', 'Web Design', 'Cultural Design', 'Responsive Design'],
      github: 'https://github.com/Nazier-123/forkAndFlame'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % spotlightProjects.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [spotlightProjects.length]);

  const nextSpotlight = () => {
    setSpotlightIndex((prev) => (prev + 1) % spotlightProjects.length);
  };

  const prevSpotlight = () => {
    setSpotlightIndex((prev) => (prev - 1 + spotlightProjects.length) % spotlightProjects.length);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') nextSpotlight();
      if (e.key === 'ArrowLeft') prevSpotlight();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const currentSpotlight = spotlightProjects[spotlightIndex];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="project-spotlight" id="spotlight">
          <button
            className="spotlight-nav prev"
            aria-label="Previous project"
            onClick={prevSpotlight}
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <div className="spotlight-track" id="spotlightTrack">
            {spotlightProjects.map((project, idx) => (
              <article
                key={idx}
                className={`spotlight-slide ${idx === spotlightIndex ? 'active' : ''}`}
              >
                <div className={`spotlight-media ${project.gradient}`}>
                  {project.gradient === 'gradient-geng' ? (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #D4C4A8, #E6D5B8)'
                    }}>
                      <img
                        src={genGLogo}
                        alt="Gen.G Logo"
                        style={{
                          maxWidth: '60%',
                          maxHeight: '80%',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                  ) : (
                    <svg
                      viewBox="0 0 600 300"
                      preserveAspectRatio="xMidYMid slice"
                      className="spotlight-svg"
                    >
                      <defs>
                        <linearGradient
                          id={`grad${idx}`}
                          x1={project.gradient === 'gradient-gs' ? '0%' : '0%'}
                          y1="0%"
                          x2={project.gradient === 'gradient-gs' ? '100%' : '100%'}
                          y2={project.gradient === 'gradient-gs' ? '0%' : '100%'}
                        >
                          {project.gradient === 'gradient-sm' && (
                            <>
                              <stop offset="0%" stopColor="#4F46E5" />
                              <stop offset="100%" stopColor="#06B6D4" />
                            </>
                          )}
                          {project.gradient === 'gradient-gs' && (
                            <>
                              <stop offset="0%" stopColor="#10B981" />
                              <stop offset="100%" stopColor="#134E4A" />
                            </>
                          )}
                          {project.gradient === 'gradient-ph' && (
                            <>
                              <stop offset="0%" stopColor="#EF4444" />
                              <stop offset="100%" stopColor="#8B5CF6" />
                            </>
                          )}
                          {project.gradient === 'gradient-restaurant' && (
                            <>
                              <stop offset="0%" stopColor="#D2691E" />
                              <stop offset="50%" stopColor="#CD853F" />
                              <stop offset="100%" stopColor="#8B4513" />
                            </>
                          )}
                        </linearGradient>
                      </defs>
                      <rect width="600" height="300" fill={`url(#grad${idx})`} />
                      {project.gradient === 'gradient-sm' && (
                        <g fill="rgba(255,255,255,0.25)">
                          <circle cx="100" cy="80" r="6" />
                          <circle cx="220" cy="160" r="10" />
                          <circle cx="480" cy="120" r="8" />
                        </g>
                      )}
                      {project.gradient === 'gradient-gs' && (
                        <path
                          d="M0,240 C120,220 180,260 300,240 C420,220 480,260 600,240 L600,300 L0,300 Z"
                          fill="rgba(255,255,255,0.2)"
                        />
                      )}
                      {project.gradient === 'gradient-ph' && (
                        <g stroke="rgba(255,255,255,0.35)" strokeWidth="2">
                          <polyline
                            points="0,260 80,220 160,240 240,200 320,220 400,180 480,210 560,170 600,190"
                            fill="none"
                          />
                        </g>
                      )}
                      {project.gradient === 'gradient-restaurant' && (
                        <g fill="rgba(255,255,255,0.15)">
                          {/* Decorative pattern inspired by Cape Coloured culture */}
                          <circle cx="150" cy="100" r="40" />
                          <circle cx="450" cy="200" r="35" />
                          <path d="M300,50 Q350,100 300,150 Q250,100 300,50" />
                          <path d="M200,200 Q250,250 200,300 Q150,250 200,200" />
                          <path d="M400,100 Q450,150 400,200 Q350,150 400,100" />
                        </g>
                      )}
                    </svg>
                  )}
                </div>
                <div className="spotlight-content">
                  <div className="spotlight-badge">{project.badge}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="spotlight-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                  <div className="spotlight-ctas">
                    {project.live && (
                      <a
                        className="btn btn-primary"
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Live
                      </a>
                    )}
                    {project.github && (
                      <a
                        className="btn btn-primary"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </a>
                    )}
                    {project.itch && (
                      <a
                        className="btn btn-primary"
                        href={project.itch}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Play on itch.io
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <button
            className="spotlight-nav next"
            aria-label="Next project"
            onClick={nextSpotlight}
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        <div className="projects-grid">
          {allProjects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.live && (
                    <a
                      href={project.live}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  )}
                  {project.itch && (
                    <a
                      href={project.itch}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-gamepad"></i> Play on itch.io
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

