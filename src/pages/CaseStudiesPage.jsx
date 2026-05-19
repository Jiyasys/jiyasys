import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import Header from '../components/Header';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import AnimateOnScroll from '../components/AnimateOnScroll';
import './SoftwareBuildingPage.css';
import './CaseStudiesPage.css';

export const caseStudies = [
  {
    id: '45-degrees',
    title: '45 Degrees: Automation Scale',
    category: 'Enterprise Automation',
    description: 'Transforming luxury travel operations by implementing a unified automation platform.',
    fullInfo: '45 Degrees faced significant bottlenecks in their manual itinerary creation and supplier coordination. We implemented a custom process orchestration engine that reduced manual tasks by 70%. The system integrates with global travel APIs and automates client communications, allowing the team to handle 3x the volume without adding headcount.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    stats: ['70% manual task reduction', '3x volume capacity']
  },
  {
    id: 'clandestine',
    title: 'Clandestine: ML Security',
    category: 'Machine Learning',
    description: 'Slashing fraud false positives and investigation time through adaptive AI systems.',
    fullInfo: 'Clandestine needed a way to move beyond rigid rule-based fraud detection. We built an adaptive machine learning system that learns from new threat patterns in real-time. This reduced false positives by 43% and automated 60% of initial investigations, allowing security teams to focus on complex, high-value threats.',
    image: 'https://framerusercontent.com/images/SotjoARFrMCehNUIHUe6OayExMw.jpg?scale-down-to=1024&width=1200&height=904',
    stats: ['43% fewer false positives', '60% faster resolution']
  },
  {
    id: 'globalbank',
    title: 'GlobalBank: AI Lending',
    category: 'Fintech / AI',
    description: 'Cutting lending decision times from days to hours with a unified AI-powered system.',
    fullInfo: 'GlobalBank’s manual lending review process was a major bottleneck for customer growth. We engineered a unified AI lending dashboard that automates data collection, credit assessment, and compliance checks. Decision times dropped from 48 hours to under 2 hours, with 99.2% compliance accuracy maintained.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    stats: ['95% faster decisioning', '99.2% compliance accuracy']
  },
  {
    id: 'railspeed',
    title: 'Railspeed: Predictive Rail',
    category: 'Logistics / AI',
    description: 'Eliminating 42% of operational delays through predictive AI maintenance scheduling.',
    fullInfo: 'Railspeed needed to move from reactive to proactive maintenance for their European rail network. We developed a predictive maintenance platform that analyzes real-time sensor data from locomotives. The system predicts potential failures up to 12 hours in advance, reducing unplanned downtime by 42% and saving millions in operational costs.',
    image: '/railspeed_ai_logistics.png',
    stats: ['42% delay reduction', '$2.4M annual savings']
  }
];

const CaseStudiesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="software-page case-studies-page">
      <SEO 
        title="Case Studies" 
        description="Explore our portfolio of successful projects and see how we help businesses grow through technology."
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="sw-hero">
          <div className="sw-hero-inner">


            <AnimateOnScroll animation="fade-up" delay={0.05} className="sw-hero-content">
              <div className="sw-hero-badge">
                <span className="sw-badge-dot"></span>
                Portfolio
              </div>
              <h1 className="sw-hero-title">Our Success Stories</h1>
              <p className="sw-hero-desc">
                Discover how Jiyasys has helped enterprises across the globe achieve their digital transformation goals.
              </p>
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

        {/* Growth/Grid Section */}
        <section className="sw-growth">
          <div className="sw-growth-inner">
            <AnimateOnScroll animation="fade-up" delay={0.1} className="sw-growth-header">
              <h2 className="sw-growth-title">
                Fueling Growth Through Bespoke Engineering
              </h2>
              <p className="sw-growth-desc">
                Explore our portfolio of successful projects and see how we help businesses grow through advanced technology and intelligent solutions.
              </p>
            </AnimateOnScroll>

            {/* Grid */}
            <div className="sw-cards-grid">
              {caseStudies.map((item, idx) => {
                const id = String(idx + 1).padStart(2, '0');
                const colors = ['#E11D2E', '#3b5eff', '#ff6b35', '#a855f7'];
                const accentColor = colors[idx % colors.length];
                
                return (
                  <AnimateOnScroll key={item.id} animation="fade-up" delay={idx * 0.08} className="sw-benefit-card case-card">
                    <div className="sw-card-accent" style={{ backgroundColor: accentColor }}></div>
                    
                    <div className="case-image">
                      <img src={item.image} alt={item.title} />
                      <div className="case-category" style={{ borderLeft: `3px solid ${accentColor}` }}>{item.category}</div>
                    </div>
                    
                    <div className="sw-card-header" style={{ marginTop: '16px', marginBottom: '8px' }}>
                      <span className="sw-card-number">{id}</span>
                    </div>
                    
                    <h3 className="sw-card-title">{item.title}</h3>
                    <p className="sw-card-desc">{item.description}</p>
                    
                    <div className="sw-card-benefit">
                      <span className="sw-benefit-label" style={{ backgroundColor: accentColor }}>Impact Metrics</span>
                      <ul style={{ margin: '8px 0 0 0', padding: 0, listStyle: 'none' }}>
                        {item.stats.map((stat, sIdx) => (
                          <li key={sIdx} style={{ fontSize: '13.5px', color: '#555', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <span style={{ color: accentColor, fontWeight: 'bold', fontSize: '14px' }}>✓</span> {stat}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                      <Link to={`/case-studies/${item.id}`} className="view-btn">
                        <span>View Case Study</span>
                        <ExternalLink size={16} />
                      </Link>
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

export default CaseStudiesPage;
