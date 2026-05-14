import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Zap, Layout } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import CTASection from '../components/CTASection';
import '../components/ServiceDetail.css';

const WebDevelopmentPage = () => {
  return (
    <div className="service-detail-page">
      <SEO 
        title="Web Development Services" 
        description="Enterprise-grade web development solutions using modern frameworks like React, Next.js, and Node.js."
      />
      <Header />
      
      <main>
        <section className="service-hero">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="hero-content"
            >
              <span className="category">Development</span>
              <h1>High-Performance <span className="highlight">Web Solutions</span></h1>
              <p>We build scalable, secure, and lightning-fast web applications tailored to your enterprise needs.</p>
            </motion.div>
          </div>
        </section>

        <section className="features-grid">
          <div className="container">
            <div className="grid">
              <div className="feature-card">
                <Globe className="icon" />
                <h3>Modern Frameworks</h3>
                <p>Expertise in React, Next.js, and Angular for cutting-edge frontends.</p>
              </div>
              <div className="feature-card">
                <Zap className="icon" />
                <h3>Performance First</h3>
                <p>Optimized code for maximum speed and SEO performance.</p>
              </div>
              <div className="feature-card">
                <Shield className="icon" />
                <h3>Scalable Backend</h3>
                <p>Robust Node.js and Python backends that grow with your business.</p>
              </div>
              <div className="feature-card">
                <Layout className="icon" />
                <h3>Responsive Design</h3>
                <p>Flawless user experience across all devices and screen sizes.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CTASection />
    </div>
  );
};

export default WebDevelopmentPage;
