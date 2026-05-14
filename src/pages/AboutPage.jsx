import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Header from '../components/Header';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <SEO 
        title="About Us" 
        description="Learn more about Jiyasys, our mission, vision, and the team behind our enterprise IT solutions."
      />
      <Header />
      
      <main>
        <section className="about-hero">
          <div className="container">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Driving Innovation Through <span className="highlight">Excellence</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="subtitle"
            >
              Jiyasys is a leading IT services provider dedicated to transforming businesses through modern technology and strategic consulting.
            </motion.p>
          </div>
        </section>

        <section className="mission-vision">
          <div className="container grid">
            <motion.div 
              className="card"
              whileHover={{ y: -10 }}
            >
              <h3>Our Mission</h3>
              <p>To empower businesses globally by delivering innovative, high-quality, and scalable technology solutions that drive growth and efficiency.</p>
            </motion.div>
            <motion.div 
              className="card"
              whileHover={{ y: -10 }}
            >
              <h3>Our Vision</h3>
              <p>To be the world's most trusted partner for enterprise-grade IT services, recognized for our commitment to excellence and client success.</p>
            </motion.div>
          </div>
        </section>

        <section className="stats-grid">
          <div className="container">
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Tech Experts</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Retention</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CTASection />
    </div>
  );
};

export default AboutPage;
