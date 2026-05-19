import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import AnimateOnScroll from '../components/AnimateOnScroll';
import './ProcessPage.css';

const processSteps = [
  {
    id: '01',
    title: 'Discovery & Strategy',
    description: 'We begin by understanding business goals, user behavior, market positioning, and technical requirements to create a clear digital roadmap.',
    icon: '↗',
    color: '#E11D2E'
  },
  {
    id: '02',
    title: 'Design & User Experience',
    description: 'Our design team crafts intuitive interfaces and meaningful digital experiences that improve engagement and strengthen brand identity.',
    icon: '✦',
    color: '#3B82F6'
  },
  {
    id: '03',
    title: 'Development & AI Integration',
    description: 'We build scalable systems using modern technologies, AI-powered workflows, automation tools, and secure development practices.',
    icon: '⚙',
    color: '#10B981'
  },
  {
    id: '04',
    title: 'Testing & Optimization',
    description: 'Every product undergoes detailed testing for performance, security, responsiveness, scalability, and long-term stability.',
    icon: '✓',
    color: '#F59E0B'
  },
  {
    id: '05',
    title: 'Launch & Growth',
    description: 'After launch, we provide continuous improvements, optimization strategies, AI enhancements, and technical support to help businesses scale efficiently.',
    icon: '⚡',
    color: '#8B5CF6'
  }
];

const ProcessPage = () => {
  return (
    <div className="process-page">
      <SEO
        title="Our Process"
        description="Discover our systematic and structured approach to building scalable software, custom AI systems, and high-performance digital products."
      />
      <Header />

      <main className="process-main-content">
        {/* Simple Compact Hero Section */}
        <section className="process-hero-section">
          <div className="process-container">
            <div className="process-hero-grid">
              
              {/* Left Column: Badge & Title */}
              <div className="process-hero-left">
                <AnimateOnScroll animation="fade-up" delay={0}>
                  <div className="process-badge">
                    <span className="badge-dot"></span>
                    <span className="badge-label">Methodology</span>
                  </div>
                </AnimateOnScroll>
                
                <AnimateOnScroll animation="fade-up" delay={0.08}>
                  <h1 className="process-main-heading">
                    Our Process
                  </h1>
                </AnimateOnScroll>
              </div>

              {/* Right Column: Statement */}
              <div className="process-hero-right">
                <AnimateOnScroll animation="fade-up" delay={0.16}>
                  <p className="process-hero-statement">
                    A streamlined, value-driven execution strategy designed to turn complex business requirements into elegant, high-performing digital systems.
                  </p>
                </AnimateOnScroll>
              </div>

            </div>
          </div>
        </section>

        {/* Process Steps Cards Grid Section */}
        <section className="process-steps-section">
          <div className="process-container">
            <div className="process-grid">
              {processSteps.map((step, index) => (
                <AnimateOnScroll 
                  key={step.id} 
                  animation="fade-up" 
                  delay={0.05 * index}
                  className="process-card"
                >
                  <div className="process-card-header">
                    <div className="process-step-number" style={{ color: step.color }}>
                      {step.id}
                    </div>
                    <div className="process-icon-box" style={{ '--step-color': step.color }}>
                      <span className="process-step-icon">{step.icon}</span>
                    </div>
                  </div>
                  
                  <div className="process-card-content">
                    <h3 className="process-step-title">{step.title}</h3>
                    <p className="process-step-desc">{step.description}</p>
                  </div>
                  
                  <div className="process-card-footer">
                    <span className="process-footer-line" style={{ backgroundColor: step.color }}></span>
                    <span className="process-footer-phase">Phase {step.id}</span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

      </main>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ProcessPage;
