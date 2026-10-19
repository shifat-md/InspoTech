import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiCheckCircle, FiPackage, FiArrowRight } from 'react-icons/fi';
import Button from '../components/Button';
import DynamicIcon from '../components/DynamicIcon';
import { servicesData } from '../data/servicesData';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="container" style={{ padding: '8rem 1.5rem', textAlign: 'center' }}>
        <h2>Service Not Found</h2>
        <p style={{ margin: '1.5rem 0' }}>The service you are looking for does not exist or has been moved.</p>
        <Button to="/services" variant="primary" icon={<FiArrowLeft />} iconPosition="left">
          Back to All Services
        </Button>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <section className="section-hero">
        <div className="container">
          <Link
            to="/services"
            className="learn-more-link"
            style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <FiArrowLeft size={16} />
            <span>Back to All Services</span>
          </Link>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              marginBottom: '1.5rem'
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--gradient-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}
            >
              <DynamicIcon name={service.icon} size={32} />
            </div>
            <div>
              <span className="badge-pill" style={{ marginBottom: '0.35rem' }}>Full-Stack Service</span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{service.title}</h1>
            </div>
          </div>

          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.7', marginBottom: '2rem' }}>
            {service.fullDesc}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}>
            {service.tags.map((tag, idx) => (
              <span key={idx} className="tech-tag" style={{ fontSize: '0.9rem', padding: '0.4rem 0.85rem' }}>
                {tag}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button to={`/contact?service=${encodeURIComponent(service.title)}`} variant="primary" size="lg" icon={<FiArrowRight />}>
              Request Proposal for this Service
            </Button>
            <Button to="/portfolio" variant="outline" size="lg">
              View Related Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Scope, Benefits & Deliverables */}
      <section className="section" style={{ backgroundColor: 'var(--bg-dark-secondary)' }}>
        <div className="container">
          <div
            className="two-col-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '3rem'
            }}
          >
            {/* Key Benefits */}
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem'
              }}
            >
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <FiCheckCircle color="var(--color-teal)" />
                Architectural Benefits
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--color-teal)', fontWeight: 'bold' }}>✓</span>
                    <span style={{ color: 'var(--text-primary)', fontSize: '0.98rem', lineHeight: '1.6' }}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tangible Deliverables */}
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem'
              }}
            >
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <FiPackage color="var(--color-light-purple)" />
                What We Deliver
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {service.deliverables.map((deliv, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--color-light-purple)', fontWeight: 'bold' }}>→</span>
                    <span style={{ color: 'var(--text-primary)', fontSize: '0.98rem', lineHeight: '1.6' }}>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Navigation */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Explore Other Development Disciplines</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            {servicesData
              .filter((s) => s.id !== service.id)
              .slice(0, 5)
              .map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="btn btn-secondary btn-sm"
                >
                  {s.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
