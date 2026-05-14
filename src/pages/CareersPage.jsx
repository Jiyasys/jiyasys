import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import CTASection from '../components/CTASection';
import './CareersPage.css';

const CareersPage = () => {
  const jobs = [
    { title: 'Senior React Developer', type: 'Full-time', location: 'Remote / Jaipur' },
    { title: 'AI/ML Engineer', type: 'Full-time', location: 'Jaipur' },
    { title: 'UI/UX Designer', type: 'Contract', location: 'Remote' },
    { title: 'Project Manager', type: 'Full-time', location: 'Jaipur' }
  ];

  return (
    <div className="careers-page">
      <SEO 
        title="Careers" 
        description="Join the Jiyasys team and help us build the future of enterprise IT solutions."
      />
      <Header />
      
      <main>
        <section className="careers-hero">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Build Your Career at <span className="highlight">Jiyasys</span>
            </motion.h1>
            <p className="subtitle">
              We are always looking for passionate individuals to join our growing team of technology experts.
            </p>
          </div>
        </section>

        <section className="open-positions">
          <div className="container">
            <h2 className="section-title">Open Positions</h2>
            <div className="jobs-list">
              {jobs.map((job, idx) => (
                <motion.div 
                  key={idx} 
                  className="job-card"
                  whileHover={{ x: 10 }}
                >
                  <div className="job-info">
                    <div className="job-icon"><Briefcase size={20} /></div>
                    <div>
                      <h3>{job.title}</h3>
                      <p>{job.type} • {job.location}</p>
                    </div>
                  </div>
                  <button className="apply-btn">
                    <span>Apply Now</span>
                    <ArrowRight size={16} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="benefits">
          <div className="container">
            <h2 className="section-title">Why Join Us?</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <h4>Flexible Work</h4>
                <p>Remote-friendly culture with flexible working hours to maintain work-life balance.</p>
              </div>
              <div className="benefit-item">
                <h4>Growth Opportunities</h4>
                <p>Continuous learning programs and clear career advancement paths.</p>
              </div>
              <div className="benefit-item">
                <h4>Modern Tech Stack</h4>
                <p>Work with the latest technologies and tools in the industry.</p>
              </div>
              <div className="benefit-item">
                <h4>Inclusive Environment</h4>
                <p>A diverse and inclusive workplace where everyone's voice is heard.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CTASection />
    </div>
  );
};

export default CareersPage;
