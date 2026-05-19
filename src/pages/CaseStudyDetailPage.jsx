import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, TrendingUp, Zap, Target } from 'lucide-react';
import { caseStudies } from './CaseStudiesPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import AnimateOnScroll from '../components/AnimateOnScroll';
import './SoftwareBuildingPage.css';
import './CaseStudyDetailPage.css';

const CaseStudyDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = caseStudies.find(c => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="not-found">
        <Header />
        <div className="container" style={{ padding: '120px 20px', textAlignment: 'center' }}>
          <h1 className="sw-growth-title">Project Not Found</h1>
          <button className="sidebar-btn" style={{ maxWidth: '200px', marginTop: '20px' }} onClick={() => navigate('/case-studies')}>
            Back to Portfolio
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="software-page case-detail-page">
      <SEO title={`${project.title} | Case Study`} description={project.description} />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="sw-hero">
          <div className="sw-hero-inner">


            <AnimateOnScroll animation="fade-up" delay={0.05} className="sw-hero-content">
              <div className="sw-hero-badge">
                <span className="sw-badge-dot"></span>
                {project.category}
              </div>
              <h1 className="sw-hero-title">{project.title}</h1>
              <p className="sw-hero-desc">{project.description}</p>
            </AnimateOnScroll>

            <div className="sw-hero-visual">
              <div className="sw-hero-grid-pattern">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="sw-grid-dot" style={{ animationDelay: `${i * 0.05}s` }}></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Content Section */}
        <section className="sw-growth case-detail-body-section">
          <div className="sw-growth-inner case-detail-grid">
            
            {/* Left Content Column */}
            <div className="case-detail-left">
              <AnimateOnScroll animation="fade-up" delay={0.1} className="case-detail-image-wrap">
                <img src={project.image} alt={project.title} className="case-detail-hero-image" />
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.15} className="case-detail-text-block">
                <h2 className="sw-growth-title" style={{ fontSize: '28px', marginBottom: '16px' }}>Project Overview</h2>
                <p className="full-info-text">{project.fullInfo}</p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.2} className="case-outcomes-box">
                <h3 className="sw-card-title" style={{ fontSize: '20px', marginBottom: '16px' }}>Key Impact Outcomes</h3>
                <div className="outcomes-list">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="outcome-card-item">
                      <div className="outcome-check-icon">✓</div>
                      <span className="outcome-text">{stat}</span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right Sidebar Column */}
            <aside className="case-detail-sidebar">
              <AnimateOnScroll animation="fade-up" delay={0.25} className="sidebar-metric-card">
                <h4 className="sidebar-card-title">Project Metadata</h4>
                <div className="sidebar-metric-divider"></div>
                
                <div className="metric-row">
                  <div className="metric-icon-box" style={{ backgroundColor: 'rgba(225, 29, 46, 0.1)' }}>
                    <Zap size={18} style={{ color: 'var(--primary-red)' }} />
                  </div>
                  <div className="metric-details">
                    <span className="metric-header">Efficiency Gain</span>
                    <span className="metric-value">Optimized Workflow</span>
                  </div>
                </div>

                <div className="metric-row">
                  <div className="metric-icon-box" style={{ backgroundColor: 'rgba(59, 94, 255, 0.1)' }}>
                    <Target size={18} style={{ color: '#3b5eff' }} />
                  </div>
                  <div className="metric-details">
                    <span className="metric-header">Strategic Impact</span>
                    <span className="metric-value">Enterprise-Wide</span>
                  </div>
                </div>

                <div className="metric-row">
                  <div className="metric-icon-box" style={{ backgroundColor: 'rgba(168, 85, 247, 0.1)' }}>
                    <TrendingUp size={18} style={{ color: '#a855f7' }} />
                  </div>
                  <div className="metric-details">
                    <span className="metric-header">Return on Investment</span>
                    <span className="metric-value">Highly Positive</span>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.3} className="sidebar-cta-card">
                <div className="cta-accent-border"></div>
                <h4 className="cta-title">Ready to scale your business?</h4>
                <p className="cta-desc">Let us build a customized, high-performance technology solution to automate your operations and skyrocket productivity.</p>
                <button className="sidebar-btn" onClick={() => navigate('/contact')}>
                  Start Your Project
                </button>
              </AnimateOnScroll>
            </aside>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetailPage;
