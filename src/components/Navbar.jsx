import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiArrowRight, FiCode } from 'react-icons/fi';
import { navLinks } from '../data/navigationData';
import { siteConfig } from '../data/siteConfig';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Scroll listener for sticky navbar background blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background body scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Logo / Agency Name */}
          <Link to="/" className="navbar-brand" aria-label={`${siteConfig.name} Home`}>
            <div className="brand-icon-wrap">
              <FiCode size={22} color="#FFFFFF" />
            </div>
            <span className="brand-text">
              {siteConfig.name}
              <span className="brand-dot">.</span>
            </span>
          </Link>

          {/* Desktop Navigation Menu: EXACTLY 4 LINKS: Home, About, Services, Contact */}
          <nav className="nav-menu" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end={item.path === '/'}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="navbar-actions">
            <Link
              to="/contact"
              className="btn btn-primary btn-sm"
              style={{ display: 'none' }} // visible above 768px via inline media or default styling
            >
              <span>Start Project</span>
              <FiArrowRight size={16} />
            </Link>

            {/* Prominent CTA on desktop */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <Link to="/contact" className="btn btn-primary btn-sm">
                <span>Contact Us</span>
                <FiArrowRight size={15} />
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                className="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                <FiMenu />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Content */}
      <aside
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation Menu"
      >
        <div className="mobile-nav-header">
          <Link to="/" className="navbar-brand" onClick={() => setMobileMenuOpen(false)}>
            <div className="brand-icon-wrap" style={{ width: '32px', height: '32px' }}>
              <FiCode size={18} color="#FFFFFF" />
            </div>
            <span className="brand-text">{siteConfig.name}</span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile navigation"
            style={{ color: 'var(--text-white)', fontSize: '1.5rem', padding: '0.25rem' }}
          >
            <FiX />
          </button>
        </div>

        {/* 4 Navigation Links in Mobile Drawer */}
        <nav className="mobile-nav-links">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              end={item.path === '/'}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{item.name}</span>
              <FiArrowRight size={16} style={{ opacity: 0.6 }} />
            </NavLink>
          ))}
        </nav>

        <div className="mobile-nav-footer">
          <Link
            to="/contact"
            className="btn btn-primary"
            style={{ width: '100%', marginBottom: '1rem' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Start a Project</span>
            <FiArrowRight size={16} />
          </Link>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            {siteConfig.contact.email}
          </p>
        </div>
      </aside>
    </>
  );
}
