import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import Header from './Header';
import Footer from './Footer';
import './ServiceDetailPage.css';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  // Scroll to top on mount or id change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const otherServices = servicesData.filter(s => s.id !== id);

  return (
    <div className="service-page-wrapper">
      <Header />
      <main className="service-detail-main">
        <div className="service-detail-container" key={id}>
          
          {/* Left Sidebar */}
          <aside className="service-sidebar">
            <div className="sidebar-top animate-slide-left delay-0">
              <Link to="/#services-list" className="back-link">
                <ChevronLeft size={16} />
                <span>Back to services</span>
              </Link>
            </div>
            
            <div className="other-services-section">
              <div className="other-services-header animate-slide-left delay-1">
                <div className="green-square"></div>
                <span>Other services</span>
              </div>
              
              <div className="other-services-list">
                {otherServices.map((other, idx) => (
                  <Link
                    key={other.id}
                    to={`/service/${other.id}`}
                    className={`other-service-item animate-slide-left delay-${Math.min(idx + 2, 7)}`}
                  >
                    <img src={other.thumbnail} alt={other.title} className="other-service-thumbnail" />
                    <span className="other-service-title">{other.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Content */}
          <article className="service-content">
            <div className="content-header">
              <h1 className="service-main-title animate-fade-up delay-0">{service.title}</h1>
            </div>
            
            <div className="content-body">
              <h2 className="overview-title animate-fade-up delay-1">Overview</h2>
              <p className="overview-text animate-fade-up delay-2">{service.overview}</p>
              
              <div className="featured-image-container animate-fade-in delay-3">
                <img src={service.image} alt={service.title} className="featured-image" />
                <div className="featured-image-logo">SOURCE®</div>
              </div>
            </div>
          </article>
          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
