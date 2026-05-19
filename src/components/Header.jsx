import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Smartphone, Cpu, BarChart, Users, Globe, Rocket, Shield, Cloud, Sun, Moon, Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [time, setTime] = useState(new Date());
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Auto-close menu and active dropdowns on location changes
  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  }, [location]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    });
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const menuItems = {
    company: {
      title: 'Company',
      columns: [
        {
          title: 'Company',
          items: [
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Blogs', path: '/blog' }
          ]
        },
        {
          title: 'Connect',
          items: [
            { name: 'Projects', path: '/projects' },
            { name: 'Process', path: '/process' },
            { name: 'Careers', path: '/careers' }
          ]
        }
      ],
      banner: {
        text: 'Learn more about Source',
        image: 'https://framerusercontent.com/images/rErw2A1ONfnlJHNAs72PHihTU.webp?scale-down-to=1024&width=3277&height=1843',
        link: '/about'
      }
    },
    industries: {
      title: 'Industries',
      columns: [
        {
          title: 'Sectors',
          items: [
            { name: 'Fintech', path: '/industry/fintech' },
            { name: 'Healthcare', path: '/industry/healthcare' },
            { name: 'E-commerce', path: '/industry/ecommerce' },
            { name: 'Edtech', path: '/industry/edtech' }
          ]
        }
      ],
      banner: {
        text: 'Learn more about Source',
        image: 'https://framerusercontent.com/images/xbnCNFJnFUT2cvuqgcqTvCoJHgk.webp?width=1500&height=2000',
        link: '/about'
      }
    },
    services: {
      title: 'Services',
      columns: [
        {
          title: 'Our services',
          items: [
            { name: 'AI Product Development & Automation', path: '/service/01' },
            { name: 'SaaS Product Development', path: '/service/02' },
            { name: 'Web Development', path: '/service/03' },
            { name: 'Mobile App Development', path: '/service/04' },
            { name: 'UI/UX Design', path: '/service/05' },
            { name: 'ECommerce Development', path: '/service/06' },
            { name: 'Animated & Cinematic Website Experiences', path: '/service/07' }
          ]
        }
      ],
      banner: {
        text: 'Explore our Services',
        image: 'https://framerusercontent.com/images/7V11bCw5ZhBsQiaAGZyRDIvLYY.webp?scale-down-to=1024&width=1920&height=1080',
        link: '/#services-list'
      }
    }
  };

  return (
    <header className="header" onMouseLeave={() => setActiveMenu(null)}>
      <div className="header-left">
        <Link to="/" className="logo">
          <img src="https://www.jiyasys.com/logo.png" alt="Jiyasys Logo" className="jiyasys-logo" />
        </Link>
      </div>

      <div className="header-center">
        <div className="location-info">
          <span className="location-text">Rajasthan, India</span>
          <div className="status-dot"></div>
          <span className="time-text">{formatTime(time)}</span>
        </div>
      </div>

      <nav className={`header-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="mobile-nav-header">
          <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
            <img src="https://www.jiyasys.com/logo.png" alt="Jiyasys Logo" className="jiyasys-logo" />
          </Link>
          <button className="mobile-close-btn" onClick={toggleMobileMenu}>
            <X size={24} />
          </button>
        </div>

        <ul className="nav-list">
          <li
            className={`nav-item ${activeMenu === 'company' ? 'active' : ''}`}
            onMouseEnter={() => !mobileMenuOpen && setActiveMenu('company')}
            onClick={() => mobileMenuOpen && setActiveMenu(activeMenu === 'company' ? null : 'company')}
          >
            <span>Company</span>
            <ChevronDown size={14} className={`chevron ${activeMenu === 'company' ? 'rotate' : ''}`} />
          </li>

          <li
            className={`nav-item ${activeMenu === 'industries' ? 'active' : ''}`}
            onMouseEnter={() => !mobileMenuOpen && setActiveMenu('industries')}
            onClick={() => mobileMenuOpen && setActiveMenu(activeMenu === 'industries' ? null : 'industries')}
          >
            <span>Industries</span>
            <ChevronDown size={14} className={`chevron ${activeMenu === 'industries' ? 'rotate' : ''}`} />
          </li>
          <li className="nav-item">
            <Link to="/case-studies" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
          </li>
          <li
            className={`nav-item ${activeMenu === 'services' ? 'active' : ''}`}
            onMouseEnter={() => !mobileMenuOpen && setActiveMenu('services')}
            onClick={() => mobileMenuOpen && setActiveMenu(activeMenu === 'services' ? null : 'services')}
          >
            <span>Services</span>
            <ChevronDown size={14} className={`chevron ${activeMenu === 'services' ? 'rotate' : ''}`} />
          </li>
        </ul>

        {activeMenu && (
          <>
            <div className="mega-menu-overlay" onMouseEnter={() => !mobileMenuOpen && setActiveMenu(null)} onClick={() => setActiveMenu(null)}></div>
            <div className="mega-menu" onMouseEnter={() => !mobileMenuOpen && setActiveMenu(activeMenu)}>
              <div className="mega-menu-content">
                <div className="mega-menu-columns">
                  {menuItems[activeMenu].columns.map((column, idx) => (
                    <div key={idx} className="mega-menu-column">
                      <h4 className="column-title">{column.title}</h4>
                      <ul className="column-list">
                        {column.items.map((item, i) => (
                          <li key={i} className="column-item">
                            <Link to={item.path} className="item-link" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>
                              {item.icon && <span className="item-icon">{item.icon}</span>}
                              <span className="item-name">{item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {menuItems[activeMenu].banner && (
                  <Link to={menuItems[activeMenu].banner.link} className="mega-menu-banner" onClick={() => { setActiveMenu(null); setMobileMenuOpen(false); }}>
                    <img src={menuItems[activeMenu].banner.image} alt="Banner" className="banner-image" />
                    <div className="banner-content">
                      <span className="banner-text">{menuItems[activeMenu].banner.text}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="banner-arrow">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </>
        )}
      </nav>

      <div className="header-right">
        {/* <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button> */}
        <button className="contact-btn" onClick={() => { navigate('/contact'); setMobileMenuOpen(false); }}>Get Started</button>
        <button className="mobile-toggle" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={toggleMobileMenu}></div>
      )}
    </header>
  );
};

export default Header;

