import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { servicesData as services } from '../data/servicesData';
import AnimateOnScroll from './AnimateOnScroll';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-section" id="services-list">
      <div className="services-header">
        <div className="services-header-content">
          <AnimateOnScroll animation="fade-up" delay={0}>
            <h2 className="services-title">Our Expertise</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={0.1}>
            <p className="services-subtitle">
              We create scalable technology solutions powered by modern engineering, AI integrations, cloud infrastructure, and premium digital experiences.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="services-list-modern">
        {services.map((service, idx) => (
          <AnimateOnScroll key={service.id} animation="fade-up" delay={idx * 0.07} threshold={0.08}>
            <div className="service-card-modern">
              <div className="service-content-modern">
                <h3 className="service-name-modern">{service.title}</h3>
                <p className="service-desc-modern">{service.description}</p>
                
                <div className="service-bottom-modern">
                  <div className="service-tags-modern">
                    {service.tags.map((tag, tidx) => (
                      <span key={tidx} className="service-tag-modern">#{tag}</span>
                    ))}
                  </div>
                  <Link to={`/service/${service.id}`} className="learn-more-modern">
                    Learn more <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="service-media-modern">
                <img src={service.image} alt={service.title} className="service-image-modern" />
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
