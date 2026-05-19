import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import './SEOContentBlock.css';

const expertiseList = [
  { id: '01', name: 'AI Product Development' },
  { id: '02', name: 'SaaS Application Development' },
  { id: '03', name: 'Custom Web Applications' },
  { id: '04', name: 'Mobile App Development' },
  { id: '05', name: 'eCommerce Platforms' },
  { id: '06', name: 'Marketplace Systems' },
  { id: '07', name: 'Automation Solutions' },
  { id: '08', name: 'Cloud-Based Software Development' },
  { id: '09', name: 'UI/UX Design Systems' },
  { id: '10', name: 'Interactive Digital Experiences' },
  { id: '11', name: 'AI Workflow Integration' },
  { id: '12', name: 'Business Automation Platforms' }
];

const SEOContentBlock = () => {
  return (
    <section className="seo-block-section">
      <div className="container seo-block-container">
        <div className="seo-block-wrapper">
          
          {/* Left Column: Heading and Story */}
          <div className="seo-block-left">
            <AnimateOnScroll animation="fade-up" delay={0}>
              <div className="seo-block-badge">
                <span className="seo-badge-line"></span>
                <span className="seo-badge-text">Capabilities</span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.08}>
              <h2 className="seo-block-heading">
                Custom Software & <span className="highlight-text">AI Development</span> Company
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.16}>
              <p className="seo-block-paragraph highlight-p">
                Jiyasys Softwares Pvt. Ltd. is a leading software development company specializing in AI product development, SaaS platforms, web application development, mobile app development, automation systems, UI/UX design, and digital transformation solutions.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.24}>
              <p className="seo-block-paragraph secondary-p">
                We help startups, entrepreneurs, agencies, and enterprises build scalable digital products with modern architecture, clean user experiences, and future-ready technologies.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Vertical Divider Line for Desktop */}
          <div className="seo-vertical-divider"></div>

          {/* Right Column: Expertise Grid */}
          <div className="seo-block-right">
            <AnimateOnScroll animation="fade-up" delay={0.12}>
              <div className="seo-expertise-header">
                <h4 className="seo-expertise-title">Our Expertise Areas</h4>
                <span className="seo-expertise-count">[12 Sectors]</span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.2} className="seo-tags-grid">
              {expertiseList.map((item, idx) => (
                <div key={idx} className="seo-chip-card">
                  <div className="seo-chip-card-left">
                    <span className="seo-chip-id">{item.id}</span>
                    <span className="seo-chip-name">{item.name}</span>
                  </div>
                  <span className="seo-chip-arrow">↗</span>
                </div>
              ))}
            </AnimateOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SEOContentBlock;
