import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiCode,
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiGithub,
  FiLinkedin,
  FiTwitter
} from 'react-icons/fi';
import { footerGroups } from '../data/navigationData';
import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!newsletterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setErrorMsg('Please enter a valid business email address.');
      return;
    }

    // In a real application, connect your email marketing API (Mailchimp, ConvertKit, etc.)
    setSubscribed(true);
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <Link to="/" className="navbar-brand" style={{ marginBottom: '1.25rem' }}>
              <div className="brand-icon-wrap">
                <FiCode size={20} color="#FFFFFF" />
              </div>
              <span className="brand-text">{siteConfig.name}</span>
            </Link>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              {siteConfig.description}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <FiMail size={16} color="var(--color-teal)" />
                <a href={`mailto:${siteConfig.contact.email}`} className="footer-link">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <FiPhone size={16} color="var(--color-teal)" />
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="footer-link">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <FiMapPin size={16} color="var(--color-teal)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>

            <div className="footer-social-row">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="team-social-icon"
                aria-label="GitHub"
              >
                <FiGithub size={16} />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="team-social-icon"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={16} />
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="team-social-icon"
                aria-label="Twitter / X"
              >
                <FiTwitter size={16} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="footer-title">{footerGroups.company.title}</h4>
            <ul className="footer-links-list">
              {footerGroups.company.links.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="footer-title">{footerGroups.services.title}</h4>
            <ul className="footer-links-list">
              {footerGroups.services.links.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="footer-title">{footerGroups.resources.title}</h4>
            <ul className="footer-links-list">
              {footerGroups.resources.links.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Newsletter Column */}
          <div>
            <h4 className="footer-title">{footerGroups.legal.title}</h4>
            <ul className="footer-links-list" style={{ marginBottom: '1.75rem' }}>
              {footerGroups.legal.links.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <h4 className="footer-title" style={{ fontSize: '0.95rem', marginBottom: '0.75rem' }}>
              Engineering Insights
            </h4>
            <p className="footer-newsletter-text">
              Subscribe for quarterly architectural insights and web performance patterns.
            </p>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-teal)', fontSize: '0.88rem' }}>
                <FiCheckCircle size={16} />
                <span>Subscribed! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe}>
                <div className="footer-newsletter-form">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="engineer@company.com"
                    className="form-control"
                    style={{ fontSize: '0.88rem', padding: '0.55rem 0.85rem' }}
                    aria-label="Newsletter email address"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm"
                    aria-label="Subscribe to newsletter"
                    style={{ padding: '0.55rem 1rem' }}
                  >
                    <FiSend size={15} />
                  </button>
                </div>
                {errorMsg && (
                  <p style={{ color: '#F87171', fontSize: '0.8rem', marginTop: '0.35rem' }}>
                    {errorMsg}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom bar */}
        <div className="footer-bottom">
          <p>
            © {currentYear} {siteConfig.name} Agency. All rights reserved. Built with precision for full-stack excellence.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link to="/privacy-policy" className="footer-link" style={{ fontSize: '0.84rem' }}>
              Privacy
            </Link>
            <Link to="/terms-of-service" className="footer-link" style={{ fontSize: '0.84rem' }}>
              Terms
            </Link>
            <Link to="/accessibility" className="footer-link" style={{ fontSize: '0.84rem' }}>
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
