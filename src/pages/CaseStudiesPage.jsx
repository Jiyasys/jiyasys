import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Header from '../components/Header';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
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
  return (
    <div className="case-studies-page">
      <SEO 
        title="Case Studies" 
        description="Explore our portfolio of successful projects and see how we help businesses grow through technology."
      />
      <Header />
      
      <main>
        <section className="case-hero">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Our <span className="highlight">Success Stories</span>
            </motion.h1>
            <p className="subtitle">
              Discover how Jiyasys has helped enterprises across the globe achieve their digital transformation goals.
            </p>
          </div>
        </section>

        <section className="cases-grid">
          <div className="container">
            <div className="grid">
              {caseStudies.map((item, idx) => (
                <motion.div 
                  key={item.id} 
                  className="case-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="case-image">
                    <img src={item.image} alt={item.title} />
                    <div className="case-category">{item.category}</div>
                  </div>
                  <div className="case-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Link to={`/case-studies/${item.id}`} className="view-btn">
                      <span>View Case Study</span>
                      <ExternalLink size={16} />
                    </Link>
                  </div>
                </motion.div>
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

export default CaseStudiesPage;
