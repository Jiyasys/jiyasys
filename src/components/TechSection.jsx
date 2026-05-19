import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import './TechSection.css';

const techList = [
  { name: 'React', accent: '#61DAFB' },
  { name: 'Next.js', accent: '#000000' },
  { name: 'Node.js', accent: '#339933' },
  { name: 'Python', accent: '#3776AB' },
  { name: 'Laravel', accent: '#FF2D20' },
  { name: 'Flutter', accent: '#02569B' },
  { name: 'OpenAI', accent: '#412991' },
  { name: 'AI APIs', accent: '#10B981' },
  { name: 'MongoDB', accent: '#47A248' },
  { name: 'PostgreSQL', accent: '#4169E1' },
  { name: 'AWS', accent: '#FF9900' },
  { name: 'Cloud Infrastructure', accent: '#8B5CF6' },
  { name: 'Framer', accent: '#0055FF' },
  { name: 'Headless CMS', accent: '#EC4899' }
];

const TechSection = () => {
  return (
    <section className="tech-showcase-section">
      <div className="container tech-container">
        
        {/* Header Block */}
        <div className="tech-header-block">
          <AnimateOnScroll animation="fade-up" delay={0}>
            <div className="tech-badge">
              <span className="tech-badge-dot"></span>
              <span className="tech-badge-label">Stack</span>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={0.08}>
            <h2 className="tech-main-heading">
              Modern Technologies We Work With
            </h2>
          </AnimateOnScroll>
        </div>

        {/* Dense Pill Grid */}
        <AnimateOnScroll animation="fade-up" delay={0.16} className="tech-grid-wrapper">
          <div className="tech-pills-grid">
            {techList.map((tech, idx) => (
              <div key={idx} className="tech-pill-card" style={{ '--tech-glow': tech.accent }}>
                <span className="tech-pill-dot" style={{ backgroundColor: tech.accent }}></span>
                <span className="tech-pill-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
};

export default TechSection;
