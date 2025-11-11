import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Software Developer Intern with a Computer Science degree and a Post Graduate Diploma in Data Analytics.
              My passion lies at the intersection of software development and data-driven solutions, where I can leverage
              both technical skills and analytical insights to build meaningful applications.
            </p>
            <p>
              Currently, I'm working on exciting projects that range from AI-powered study tools to location-based services.
              My approach combines clean code practices with innovative problem-solving, always focusing on creating
              user-centric solutions that make a real difference.
            </p>
            <p>
              I'm particularly interested in full-stack development, machine learning applications, and building tools
              that help people in their daily lives. When I'm not coding, you'll find me exploring new technologies,
              working on personal projects, or contributing to the developer community.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Technologies Mastered</p>
              </div>
              <div className="stat">
                <h3>∞</h3>
                <p>Learning Enthusiasm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

