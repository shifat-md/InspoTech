import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiArrowRight, FiSearch } from 'react-icons/fi';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="not-found-page section-hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(5rem, 12vw, 9rem)',
            fontWeight: 800,
            lineHeight: 1,
            marginBottom: '1rem'
          }}
        >
          <span className="gradient-text">404</span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', marginBottom: '1.25rem' }}>
          Page Not Found
        </h1>

        <p style={{ maxWidth: '540px', margin: '0 auto 2.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          The URL you are trying to reach does not exist or may have been relocated. Use the navigation links below to find what you need.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <Button to="/" variant="primary" size="lg" icon={<FiHome />} iconPosition="left">
            Return to Homepage
          </Button>
          <Button to="/services" variant="outline" size="lg">
            Explore Services
          </Button>
        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '2rem', maxWidth: '500px', margin: '0 auto' }}>
          <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Quick Navigation:</span>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/portfolio" className="footer-link">Portfolio</Link>
            <Link to="/blog" className="footer-link">Blog</Link>
            <Link to="/faq" className="footer-link">FAQ</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
