import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import CTASection from '../components/CTASection';
import './HireDeveloper.css';

const HireDeveloperPage = () => {
  const roles = [
    { title: 'React Developers', path: '/hire/react-developer' },
    { title: 'Node.js Developers', path: '/hire/node-developer' },
    { title: 'Python Developers', path: '/hire/python-developer' },
    { title: 'UI/UX Designers', path: '/hire/ui-ux-designer' },
    { title: 'Full Stack Developers', path: '/hire/full-stack-developer' },
    { title: 'Mobile App Developers', path: '/hire/mobile-developer' }
  ];

  return (
    <div className="hire-dev-page">
      <SEO 
        title="Hire Dedicated Developers" 
        description="Hire top-tier dedicated developers for your projects. Scale your team with expert talent from Jiyasys."
      />
      <Header />
      
      <main>
        <section className="hire-hero">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="hero-content"
            >
              <h1>Scale Your Team with <span className="highlight">Top Tech Talent</span></h1>
              <p>Access our pool of pre-vetted, expert developers and designers to accelerate your product development.</p>
              <button className="primary-btn">Schedule a Consultation</button>
            </motion.div>
          </div>
        </section>

        <section className="why-hire">
          <div className="container">
            <h2 className="section-title">Why Hire From Jiyasys?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <Users className="icon" />
                <h3>Expert Talent</h3>
                <p>Top 1% developers with deep expertise in modern tech stacks.</p>
              </div>
              <div className="benefit-card">
                <ShieldCheck className="icon" />
                <h3>Risk-Free Trial</h3>
                <p>Ensure a perfect fit with our 1-week risk-free trial period.</p>
              </div>
              <div className="benefit-card">
                <CheckCircle className="icon" />
                <h3>Vetted Professionals</h3>
                <p>Rigorous screening process for technical and soft skills.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="roles-section">
          <div className="container">
            <h2 className="section-title">Hire for Any Role</h2>
            <div className="roles-grid">
              {roles.map((role, idx) => (
                <motion.div 
                  key={idx} 
                  className="role-card"
                  whileHover={{ y: -5 }}
                >
                  <h3>{role.title}</h3>
                  <button className="link-btn">
                    <span>Explore Talent</span>
                    <ArrowRight size={16} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CTASection />
    </div>
  );
};

export default HireDeveloperPage;
