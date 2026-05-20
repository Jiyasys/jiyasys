import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import Header from '../components/Header';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import AnimateOnScroll from '../components/AnimateOnScroll';
import './AboutPage.css';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <SEO
        title="About Us"
        description="Learn more about Jiyasys: our AI-driven solutions, core values, strategic workflows, and our commitment to scaling startups and enterprises."
      />
      <Header />

      <main className="about-main-content">
        
        {/* 1. Hero Section */}
        <section className="about-hero-section">
          <div className="about-container-modern">
            <AnimateOnScroll animation="fade-up" delay={0}>
              <span className="about-hero-badge">ABOUT JIyasys</span>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <h1 className="about-hero-title">We Are Jiyasys: Building Intelligent Digital Experiences</h1>
            </AnimateOnScroll>
            <div className="about-hero-grid">
              <AnimateOnScroll animation="fade-up" delay={0.2} className="about-hero-sub-wrapper">
                <p className="about-hero-subtitle">
                  We create AI-powered software, automation systems, and cinematic digital platforms that help businesses scale faster, operate smarter, and deliver better user experiences.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={0.3} className="about-hero-desc-wrapper">
                <p className="about-hero-description">
                  At Jiyasys, we combine strategy, AI innovation, and modern engineering to transform complex business workflows into scalable, high-performance digital ecosystems.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* 2. About Intro Section */}
        <section className="about-intro-section">
          <div className="about-container-modern">
            <div className="about-intro-grid">
              <div className="about-intro-left">
                <AnimateOnScroll animation="fade-up" delay={0}>
                  <h2 className="about-intro-heading">
                    At Jiyasys, we build intelligent systems designed to simplify operations, automate workflows, and accelerate digital growth.
                  </h2>
                </AnimateOnScroll>
              </div>
              <div className="about-intro-right">
                <AnimateOnScroll animation="fade-up" delay={0.1}>
                  <p className="about-intro-paragraph highlight">
                    By combining AI-first development, modern UI/UX design, and scalable engineering, we create powerful software solutions that improve efficiency, enhance customer experiences, and drive long-term business success.
                  </p>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fade-up" delay={0.2}>
                  <p className="about-intro-paragraph">
                    From custom software and enterprise platforms to animated websites and AI automation systems, every solution is crafted to deliver measurable impact and future-ready performance.
                  </p>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Values Section */}
        <section className="core-values-section">
          <div className="about-container-modern">
            <AnimateOnScroll animation="fade-up" delay={0}>
              <div className="section-title-wrapper">
                <span className="section-label">Core Values</span>
                <h2 className="section-heading">The principles that guide our work</h2>
              </div>
            </AnimateOnScroll>

            <div className="values-grid">
              <AnimateOnScroll animation="fade-up" delay={0.05} className="value-card">
                <span className="value-num">01</span>
                <h3>Innovation First</h3>
                <p>We leverage AI technologies, automation, and modern development frameworks to build future-ready digital solutions for growing businesses.</p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.1} className="value-card">
                <span className="value-num">02</span>
                <h3>Collaboration</h3>
                <p>We work closely with clients and teams to create scalable products aligned with business goals, user needs, and long-term vision.</p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.15} className="value-card">
                <span className="value-num">03</span>
                <h3>Data-Driven Decisions</h3>
                <p>Every strategy, design, and development process is backed by analytics, performance insights, and measurable business outcomes.</p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.2} className="value-card">
                <span className="value-num">04</span>
                <h3>Efficiency</h3>
                <p>We streamline workflows and eliminate operational complexity through intelligent automation and optimized digital systems.</p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.25} className="value-card">
                <span className="value-num">05</span>
                <h3>Integrity</h3>
                <p>Transparency, reliability, and quality are at the core of every partnership, product, and solution we deliver.</p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.3} className="value-card">
                <span className="value-num">06</span>
                <h3>Continuous Growth</h3>
                <p>We continuously evolve with emerging technologies, AI innovation, and modern digital experiences to help businesses stay ahead.</p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* 4. How We Work Section */}
        <section className="how-we-work-section">
          <div className="about-container-modern grid-work">
            
            {/* Left Content */}
            <div className="work-left">
              <AnimateOnScroll animation="fade-up" delay={0}>
                <span className="section-label">Our Process</span>
                <h2 className="work-heading">How we work</h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={0.1}>
                <p className="work-paragraph">
                  We follow a strategic, AI-driven development process that transforms business challenges into scalable digital solutions focused on performance, automation, and measurable growth.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={0.2}>
                <div className="work-trust-wrapper">
                  <span className="trust-dot-red"></span>
                  <p className="work-trust-line">
                    Trusted by startups, enterprises, and growing brands building future-ready digital ecosystems.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={0.3}>
                <button className="work-cta-btn" onClick={() => navigate('/contact')}>
                  Get Started
                </button>
              </AnimateOnScroll>
            </div>

            {/* Right Steps */}
            <div className="work-right">
              <div className="work-steps-list">
                
                <AnimateOnScroll animation="fade-up" delay={0.05} className="work-step-item">
                  <div className="step-number-box">
                    <span className="step-number">01</span>
                  </div>
                  <div className="step-content">
                    <h3>Analysis & Roadmap</h3>
                    <p>We analyze your business goals, workflows, and operational challenges to create a clear digital transformation roadmap.</p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={0.1} className="work-step-item">
                  <div className="step-number-box">
                    <span className="step-number">02</span>
                  </div>
                  <div className="step-content">
                    <h3>Architecture & UX</h3>
                    <p>Our team designs scalable software architectures, automation systems, and modern user experiences tailored to your business.</p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={0.15} className="work-step-item">
                  <div className="step-number-box">
                    <span className="step-number">03</span>
                  </div>
                  <div className="step-content">
                    <h3>Development & Optimization</h3>
                    <p>We develop, test, and optimize intelligent digital products that improve efficiency, performance, and customer engagement.</p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={0.2} className="work-step-item">
                  <div className="step-number-box">
                    <span className="step-number">04</span>
                  </div>
                  <div className="step-content">
                    <h3>Deployment & Scaling</h3>
                    <p>After deployment, we provide continuous support, AI optimization, and system enhancements for long-term scalability and growth.</p>
                  </div>
                </AnimateOnScroll>

              </div>
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
