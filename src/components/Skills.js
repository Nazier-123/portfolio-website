import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef(null);

  const skills = {
    languages: [
      { name: 'JavaScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'C++', level: 75 },
      { name: 'SQL', level: 85 }
    ],
    frontend: [
      { name: 'React', level: 88 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Vue.js', level: 75 },
      { name: 'TypeScript', level: 82 },
      { name: 'Tailwind CSS', level: 90 }
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 88 },
      { name: 'Django', level: 75 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 82 }
    ],
    tools: [
      { name: 'Git/GitHub', level: 92 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Linux', level: 80 },
      { name: 'Agile/Scrum', level: 85 }
    ]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach((bar) => {
              const width = bar.getAttribute('data-width');
              bar.style.width = '0';
              setTimeout(() => {
                bar.style.width = width + '%';
              }, 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container" ref={skillsRef}>
          <div className="skill-category">
            <h3>
              <i className="fas fa-code"></i> Languages
            </h3>
            <div className="skill-list">
              {skills.languages.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <span>{skill.name}</span>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      data-width={skill.level}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>
              <i className="fas fa-laptop-code"></i> Frontend
            </h3>
            <div className="skill-list">
              {skills.frontend.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <span>{skill.name}</span>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      data-width={skill.level}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>
              <i className="fas fa-server"></i> Backend
            </h3>
            <div className="skill-list">
              {skills.backend.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <span>{skill.name}</span>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      data-width={skill.level}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>
              <i className="fas fa-tools"></i> Tools & Others
            </h3>
            <div className="skill-list">
              {skills.tools.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <span>{skill.name}</span>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      data-width={skill.level}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

