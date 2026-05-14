import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import CTASection from '../components/CTASection';
import '../components/ServiceDetail.css';

const CybersecurityPage = () => {
  return (
    <div className="service-detail-page">
      <SEO 
        title="Enterprise Cybersecurity" 
        description="Protect your business from digital threats with our comprehensive cybersecurity services and audits."
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
              <span className="category">Security</span>
              <h1>Ironclad <span className="highlight">Cybersecurity</span></h1>
              <p>Protect your enterprise assets with our comprehensive security audits, threat detection, and response systems.</p>
            </motion.div>
          </div>
        </section>

        <section className="features-grid">
          <div className="container">
            <div className="grid">
              <div className="feature-card">
                <Shield className="icon" />
                <h3>Threat Detection</h3>
                <p>24/7 monitoring and advanced threat detection to prevent breaches.</p>
              </div>
              <div className="feature-card">
                <Eye className="icon" />
                <h3>Security Audits</h3>
                <p>Thorough vulnerability assessments and penetration testing.</p>
              </div>
              <div className="feature-card">
                <Lock className="icon" />
                <h3>Data Protection</h3>
                <p>Advanced encryption and access control for your sensitive data.</p>
              </div>
              <div className="feature-card">
                <FileText className="icon" />
                <h3>Compliance</h3>
                <p>Ensuring your systems meet GDPR, HIPAA, and other regulatory standards.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CTASection />
    </div>
  );
};

export default CybersecurityPage;
