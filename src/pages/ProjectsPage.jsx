import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import AnimateOnScroll from '../components/AnimateOnScroll';
import './ProjectsPage.css';

const projects = [
  {
    id: '01',
    title: 'COSORA',
    category: 'Luxury E-Commerce & Brand Storytelling',
    description: 'A luxury-focused digital experience blending storytelling, premium aesthetics, and seamless eCommerce interactions designed to create emotional customer engagement.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800',
    tags: ['E-Commerce', 'Brand Storytelling', 'Premium UI', 'Web3 & Luxury'],
    accent: '#E11D2E'
  },
  {
    id: '02',
    title: 'The Photo Exchange',
    category: 'Marketplace & Secure Ecosystem',
    description: 'A scalable marketplace platform where users can create accounts to buy, sell, and rent photography products through a secure and user-friendly ecosystem.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
    tags: ['Marketplace', 'Photography', 'User Portal', 'Secure Payments'],
    accent: '#3b5eff'
  },
  {
    id: '03',
    title: 'AI Workflow Systems',
    category: 'Custom Automation & Productivity',
    description: 'Custom AI-integrated systems developed to automate business operations, optimize workflows, and accelerate organizational productivity.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    tags: ['AI Integration', 'Automations', 'Workflow Engine', 'SaaS Panel'],
    accent: '#ff6b35'
  },
  {
    id: '04',
    title: 'Cinematic Brand Websites',
    category: 'Motion Design & Digital Experiences',
    description: 'Animated and cinematic website experiences designed to help users emotionally connect with products through immersive storytelling, premium motion design, and visually engaging digital interactions.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    tags: ['Cinematic Web', 'WebGL / Motion', 'Creative Tech', 'User Experience'],
    accent: '#a855f7'
  }
];

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <SEO
        title="Featured Projects"
        description="Discover how we build impactful digital products that combine technology, storytelling, automation, and premium user experiences."
      />
      <Header />

      <main className="projects-main-content">
        {/* Modern Minimal Hero Section */}
        <section className="projects-hero-section">
          <div className="projects-container">
            <div className="projects-hero-grid">
              
              {/* Left Column: Badge & Main Title */}
              <div className="projects-hero-left">
                <AnimateOnScroll animation="fade-up" delay={0}>
                  <div className="projects-badge">
                    <span className="badge-dot"></span>
                    <span className="badge-label">Featured Projects</span>
                  </div>
                </AnimateOnScroll>
                
                <AnimateOnScroll animation="fade-up" delay={0.1}>
                  <h1 className="projects-main-heading">
                    Selected Work & Digital Experiences
                  </h1>
                </AnimateOnScroll>
              </div>

              {/* Right Column: Premium Description Statement */}
              <div className="projects-hero-right">
                <AnimateOnScroll animation="fade-up" delay={0.2}>
                  <p className="projects-hero-statement">
                    We build impactful digital products that combine technology, storytelling, automation, and premium user experiences.
                  </p>
                </AnimateOnScroll>
              </div>

            </div>
          </div>
        </section>

        {/* Premium Alternating Project Grid Section */}
        <section className="featured-projects-section">
          <div className="projects-container">
            <div className="projects-list-wrapper">
              
              {projects.map((project, index) => {
                const isEven = index % 2 === 0;
                return (
                  <AnimateOnScroll 
                    key={project.id} 
                    animation="fade-up" 
                    delay={0.1 * index}
                    className={`project-row-item ${isEven ? 'row-normal' : 'row-reversed'}`}
                  >
                    {/* Visual Media Side */}
                    <div className="project-visual-side">
                      <div className="project-image-outer">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="project-image"
                        />
                        <div className="project-image-overlay" style={{ background: `linear-gradient(135deg, transparent 40%, ${project.accent}15)` }}></div>
                      </div>
                    </div>

                    {/* Information Content Side */}
                    <div className="project-info-side">
                      <div className="project-header-meta">
                        <span className="project-number">Project {project.id}</span>
                        <span className="project-meta-line" style={{ backgroundColor: project.accent }}></span>
                      </div>

                      <h2 className="project-title">{project.title}</h2>
                      <h4 className="project-category">{project.category}</h4>
                      
                      <p className="project-description">
                        {project.description}
                      </p>

                      <div className="project-tags-list">
                        {project.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="project-explore-btn-wrapper">
                        <button className="project-explore-btn" style={{ '--project-accent': project.accent }}>
                          <span>Explore Project Details</span>
                          <svg className="project-btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </AnimateOnScroll>
                );
              })}

            </div>
          </div>
        </section>

      </main>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
