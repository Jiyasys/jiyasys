import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, TrendingUp, Zap, Target } from 'lucide-react';
import { caseStudies } from './CaseStudiesPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
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
        <div className="container">
          <h1>Project Not Found</h1>
          <button onClick={() => navigate('/case-studies')}>Back to Portfolio</button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="case-detail-page">
      <SEO title={`${project.title} | Case Study`} description={project.description} />
      <Header />

      <main className="case-detail-container">
        <div className="case-detail-header">
          <Link to="/case-studies" className="back-link">
            <ArrowLeft size={16} />
            <span>Back to Success Stories</span>
          </Link>
          
          <motion.div 
            className="header-main"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="case-tag">{project.category}</span>
            <h1>{project.title}</h1>
            <p className="lead-text">{project.description}</p>
          </motion.div>
        </div>

        <div className="case-visual">
          <motion.img 
            src={project.image} 
            alt={project.title} 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          />
        </div>

        <div className="case-body">
          <div className="case-content-section">
            <h2>Overview</h2>
            <p className="full-info-text">{project.fullInfo}</p>
            
            <div className="results-box">
              <h3>Key Outcomes</h3>
              <div className="outcomes-grid">
                {project.stats.map((stat, idx) => (
                  <div key={idx} className="outcome-item">
                    <CheckCircle2 className="check-icon" size={20} />
                    <span>{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="case-sidebar">
            <div className="sidebar-card">
              <h4>Project Metrics</h4>
              <div className="metric-item">
                <Zap size={20} />
                <div>
                  <span className="metric-label">Efficiency</span>
                  <span className="metric-value">High</span>
                </div>
              </div>
              <div className="metric-item">
                <Target size={20} />
                <div>
                  <span className="metric-label">Impact</span>
                  <span className="metric-value">Strategic</span>
                </div>
              </div>
              <div className="metric-item">
                <TrendingUp size={20} />
                <div>
                  <span className="metric-label">ROI</span>
                  <span className="metric-value">Positive</span>
                </div>
              </div>
            </div>

            <div className="sidebar-cta">
              <p>Want similar results for your company?</p>
              <button className="sidebar-btn" onClick={() => navigate('/contact')}>
                Start Your Project
              </button>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetailPage;
