import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import './ContactPage.css';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! Our team will get back to you shortly.');
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Jiyasys for your IT needs. We are here to help you with software development, AI, and more."
      />
      <Header />
      
      <main className="contact-main">
        <div className="container grid">
          <div className="contact-info">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              Let's Start a <span className="highlight">Conversation</span>
            </motion.h1>
            <p className="description">
              Have a project in mind or just want to say hello? Reach out to us and let's build something amazing together.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="icon-box"><Mail size={24} /></div>
                <div>
                  <h4>Email Us</h4>
                  <p>contact@jiyasys.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-box"><Phone size={24} /></div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 123 456 7890</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-box"><MapPin size={24} /></div>
                <div>
                  <h4>Visit Us</h4>
                  <p>Rajasthan, India</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  required 
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  required 
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <select 
                  value={formState.subject}
                  onChange={(e) => setFormState({...formState, subject: e.target.value})}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="software">Software Building</option>
                  <option value="mobile">Mobile App Building</option>
                  <option value="ai">AI Automations</option>
                  <option value="consulting">Tech Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea 
                  rows="5" 
                  placeholder="Tell us about your project..." 
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
