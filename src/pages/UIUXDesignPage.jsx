import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Palette, MousePointer, Heart } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import CTASection from '../components/CTASection';
import '../components/ServiceDetail.css';

const UIUXDesignPage = () => {
  return (
    <div className="service-detail-page">
      <SEO 
        title="UI/UX Design Services" 
        description="User-centric design solutions that combine aesthetics with functionality for a premium digital experience."
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
              <span className="category">Design</span>
              <h1>User-Centric <span className="highlight">Digital Experiences</span></h1>
              <p>We blend creativity with strategy to design interfaces that are beautiful, intuitive, and conversion-focused.</p>
            </motion.div>
          </div>
        </section>

        <section className="features-grid">
          <div className="container">
            <div className="grid">
              <div className="feature-card">
                <Layout className="icon" />
                <h3>Interface Design</h3>
                <p>Modern, clean, and brand-aligned UI designs for web and mobile.</p>
              </div>
              <div className="feature-card">
                <MousePointer className="icon" />
                <h3>User Experience</h3>
                <p>Data-driven UX research and journey mapping for seamless flows.</p>
              </div>
              <div className="feature-card">
                <Palette className="icon" />
                <h3>Prototyping</h3>
                <p>High-fidelity interactive prototypes to visualize the final product.</p>
              </div>
              <div className="feature-card">
                <Heart className="icon" />
                <h3>Brand Identity</h3>
                <p>Creating cohesive visual identities that resonate with your audience.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CTASection />
    </div>
  );
};

export default UIUXDesignPage;
