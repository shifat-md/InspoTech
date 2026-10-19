import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FiShield, FiAlertTriangle, FiFileText, FiClock } from 'react-icons/fi';
import { legalPagesData, legalNotice } from '../data/legalPagesData';
import { footerGroups } from '../data/navigationData';

export default function PolicyPage({ policyKey }) {
  const location = useLocation();

  // If policyKey is not passed directly, infer from pathname (e.g. "/privacy-policy" -> "privacy-policy")
  const key = policyKey || location.pathname.replace('/', '') || 'privacy-policy';
  const pageContent = legalPagesData[key] || legalPagesData['privacy-policy'];

  return (
    <div className="policy-page">
      <section className="section-hero" style={{ paddingBottom: '2.5rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge-pill">Legal &amp; Compliance</span>
          <h1 style={{ maxWidth: '850px', margin: '0 auto 1rem', lineHeight: '1.2' }}>
            {pageContent.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            <FiClock size={15} />
            <span>Last Updated: {pageContent.lastUpdated}</span>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-dark-secondary)' }}>
        <div className="container">
          {/* Important legal placeholder advisory banner */}
          <div
            className="alert-box alert-info"
            style={{
              maxWidth: '960px',
              margin: '0 auto 3rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              background: 'rgba(124, 77, 255, 0.12)',
              border: '1px solid rgba(124, 77, 255, 0.35)',
              borderRadius: 'var(--radius-md)'
            }}
          >
            <FiAlertTriangle size={22} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ display: 'block', color: 'var(--text-white)', marginBottom: '0.35rem' }}>
                Legal Notice &amp; Template Disclaimer
              </strong>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {legalNotice}
              </p>
            </div>
          </div>

          <div
            className="two-col-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '260px 1fr',
              gap: '3.5rem',
              maxWidth: '1100px',
              margin: '0 auto'
            }}
          >
            {/* Sidebar navigation between all 6 policy pages */}
            <aside>
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  position: 'sticky',
                  top: '100px'
                }}
              >
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  Policy Documents
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {footerGroups.legal.links.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            padding: '0.65rem 0.85rem',
                            borderRadius: '6px',
                            fontSize: '0.92rem',
                            fontWeight: isActive ? 600 : 400,
                            color: isActive ? 'var(--text-white)' : 'var(--text-secondary)',
                            background: isActive ? 'var(--gradient-primary)' : 'transparent',
                            transition: 'all var(--transition-fast)'
                          }}
                        >
                          <FiFileText size={16} />
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>

            {/* Document Content */}
            <main
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-xl)',
                padding: '3rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {pageContent.sections.map((section, idx) => (
                  <div key={idx}>
                    <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '0.85rem' }}>
                      {section.heading}
                    </h2>
                    <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: '1.75' }}>
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
