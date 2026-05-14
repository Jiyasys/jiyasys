import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Header from '../components/Header';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import './ServiceDetail.css';

const GenericDetail = ({ title, category, description, features, seoTitle, seoDesc }) => {
  return (
    <div className="service-detail-page">
      <SEO title={seoTitle} description={seoDesc} />
      <Header />
      
      <main>
        <section className="service-hero">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="hero-content"
            >
              <span className="category">{category}</span>
              <h1>{title}</h1>
              <p>{description}</p>
            </motion.div>
          </div>
        </section>

        <section className="features-grid">
          <div className="container">
            <div className="grid">
              {features.map((feature, idx) => (
                <div key={idx} className="feature-card">
                  {feature.icon && <feature.icon className="icon" />}
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CTASection />
    </div>
  );
};

export default GenericDetail;
