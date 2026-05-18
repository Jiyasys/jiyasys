import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import AnimateOnScroll from '../components/AnimateOnScroll';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <SEO
        title="About Us"
        description="Learn more about Jiyasys, our mission, vision, and the team behind our enterprise IT solutions."
      />
      <Header />

      <main className="about-main-content">
        
        {/* Modernized About Section */}
        <section className="about-section-modern">
          <div className="about-container-modern">
            
            {/* Left Column: Badge & Large Heading */}
            <div className="about-left-col">
              <AnimateOnScroll animation="fade-up" delay={0}>
                <div className="about-badge-modern">
                  <span className="badge-dot"></span>
                  <p className="badge-text">
                    We help businesses modernize operations through intelligent technology and scalable digital solutions.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.1}>
                <h1 className="about-heading-modern">
                  Building intelligent digital foundations for modern businesses.
                </h1>
              </AnimateOnScroll>
            </div>

            {/* Right Column: Descriptions */}
            <div className="about-right-col">
              <AnimateOnScroll animation="fade-up" delay={0.2} className="desc-paragraph-wrapper">
                <p className="desc-paragraph highlight-desc">
                  Jiyasys Softwares Pvt. Ltd. specializes in custom software development, AI product engineering, SaaS development, automation systems, UI/UX design, and digital transformation services.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.28} className="desc-paragraph-wrapper">
                <p className="desc-paragraph">
                  Our team blends creativity, technology, and business strategy to develop digital products that improve productivity, enhance customer experiences, and support long-term scalability.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.36} className="desc-paragraph-wrapper">
                <p className="desc-paragraph">
                  We work with startups, agencies, eCommerce brands, and enterprises looking to build modern technology ecosystems powered by innovation and performance.
                </p>
              </AnimateOnScroll>
            </div>

          </div>
        </section>

        {/* Dynamic Mission & Vision */}
        <section className="mission-vision-modern">
          <div className="about-container-modern grid-split">
            <AnimateOnScroll animation="fade-up" delay={0} className="mv-card">
              <div className="mv-card-header">
                <span className="mv-card-icon">↗</span>
                <h3>Our Mission</h3>
              </div>
              <p>To empower businesses globally by delivering innovative, high-quality, and scalable technology solutions that drive growth and efficiency.</p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.1} className="mv-card">
              <div className="mv-card-header">
                <span className="mv-card-icon">✦</span>
                <h3>Our Vision</h3>
              </div>
              <p>To be the world's most trusted partner for enterprise-grade IT services, recognized for our commitment to excellence and client success.</p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Modern Minimal Stats Section */}
        <section className="stats-section-modern">
          <div className="about-container-modern">
            <div className="stats-grid-modern">
              
              <AnimateOnScroll animation="fade-up" delay={0} className="stat-card-modern">
                <span className="stat-number-modern">10+</span>
                <span className="stat-label-modern">Years Experience</span>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.08} className="stat-card-modern">
                <span className="stat-number-modern">200+</span>
                <span className="stat-label-modern">Projects Delivered</span>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.16} className="stat-card-modern">
                <span className="stat-number-modern">50+</span>
                <span className="stat-label-modern">Tech Experts</span>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.24} className="stat-card-modern">
                <span className="stat-number-modern">98%</span>
                <span className="stat-label-modern">Client Retention</span>
              </AnimateOnScroll>

            </div>
          </div>
        </section>

      </main>

      <CTASection />
      <Footer />
    </div>
  );
};

export default AboutPage;
