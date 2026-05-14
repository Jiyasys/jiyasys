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
    services: {
      title: 'Services',
      columns: [
        {
          title: 'Development',
          items: [
            { name: 'Software Building', path: '/software-building', icon: <Code size={16} /> },
            { name: 'Mobile App Building', path: '/mobile-app-building', icon: <Smartphone size={16} /> },
            { name: 'Web Development', path: '/web-development', icon: <Globe size={16} /> },
            { name: 'Cloud Services', path: '/cloud-services', icon: <Cloud size={16} /> }
          ]
        },
        {
          title: 'Specialized',
          items: [
            { name: 'AI Automations', path: '/ai-automations', icon: <Cpu size={16} /> },
            { name: 'Tech Consulting', path: '/tech-consulting', icon: <BarChart size={16} /> },
            { name: 'Cybersecurity', path: '/cybersecurity', icon: <Shield size={16} /> },
            { name: 'UI/UX Design', path: '/ui-ux-design', icon: <Rocket size={16} /> }
          ]
        }
      ]
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
      ]
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
        <ul className="nav-list">
          <li
            className={`nav-item ${activeMenu === 'services' ? 'active' : ''}`}
            onMouseEnter={() => !mobileMenuOpen && setActiveMenu('services')}
            onClick={() => mobileMenuOpen && setActiveMenu(activeMenu === 'services' ? null : 'services')}
          >
            <span>Services</span>
            <ChevronDown size={14} className={`chevron ${activeMenu === 'services' ? 'rotate' : ''}`} />
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
          <li className="nav-item">
            <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blogs</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          </li>
        </ul>

        {activeMenu && (
          <div className="mega-menu" onMouseEnter={() => !mobileMenuOpen && setActiveMenu(activeMenu)}>
            <div className="mega-menu-content">
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
          </div>
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
    </header>
  );
};

export default Header;

