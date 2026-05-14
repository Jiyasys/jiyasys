import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Lock, BarChart } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import CTASection from '../components/CTASection';
import '../components/ServiceDetail.css';

const CloudServicesPage = () => {
  return (
    <div className="service-detail-page">
      <SEO 
        title="Cloud Services & Infrastructure" 
        description="Scalable cloud solutions, migration services, and infrastructure management for modern enterprises."
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
              <span className="category">Infrastructure</span>
              <h1>Scalable <span className="highlight">Cloud Solutions</span></h1>
              <p>Accelerate your digital transformation with our enterprise-grade cloud migration and management services.</p>
            </motion.div>
          </div>
        </section>

        <section className="features-grid">
          <div className="container">
            <div className="grid">
              <div className="feature-card">
                <Cloud className="icon" />
                <h3>Cloud Migration</h3>
                <p>Seamlessly move your legacy systems to AWS, Azure, or Google Cloud.</p>
              </div>
              <div className="feature-card">
                <Server className="icon" />
                <h3>Infrastructure as Code</h3>
                <p>Automate your infrastructure deployment with Terraform and CloudFormation.</p>
              </div>
              <div className="feature-card">
                <Lock className="icon" />
                <h3>Cloud Security</h3>
                <p>Ensure your data is protected with industry-leading security practices.</p>
              </div>
              <div className="feature-card">
                <BarChart className="icon" />
                <h3>Cost Optimization</h3>
                <p>Reduce your cloud spend while maintaining peak performance.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CTASection />
    </div>
  );
};

export default CloudServicesPage;
