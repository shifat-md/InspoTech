import React, { useState } from 'react';
import { FiSearch, FiArrowRight } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import { servicesData } from '../data/servicesData';

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = servicesData.filter((service) => {
    const term = searchTerm.toLowerCase();
    const titleMatch = service.title.toLowerCase().includes(term);
    const descMatch = service.shortDesc.toLowerCase().includes(term);
    const tagMatch = service.tags.some((tag) => tag.toLowerCase().includes(term));
    return titleMatch || descMatch || tagMatch;
  });

  return (
    <div className="services-page">
      {/* =========================================================
          SERVICES HERO
          ========================================================= */}
      <section className="section-hero">
        <div className="bg-glow-orb bg-glow-purple" style={{ top: '-100px', left: '-150px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="badge-pill">Enterprise Engineering</span>
          <h1 style={{ maxWidth: '850px', margin: '0 auto 1.5rem', lineHeight: '1.2' }}>
            Full-Stack Services Tailored for High Velocity &amp; Scalability
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto 2.5rem', fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            From high-throughput backends and normalized relational databases to accessible, reactive interfaces built with modern React.
          </p>

          {/* Search bar */}
          <div style={{ maxWidth: '500px', margin: '0 auto', position: 'relative' }}>
            <FiSearch
              size={18}
              style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
            />
            <input
              type="text"
              placeholder="Search services (e.g. APIs, Database, React, Performance)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
              style={{ paddingLeft: '46px', borderRadius: 'var(--radius-full)' }}
              aria-label="Search available services"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES GRID
          ========================================================= */}
      <section className="section" style={{ backgroundColor: 'var(--bg-dark-secondary)' }}>
        <div className="container">
          <SectionHeading
            badge="Available Capabilities"
            title="Complete Engineering Catalog"
            subtitle={`Showing ${filteredServices.length} of ${servicesData.length} full-stack development specializations.`}
            align="center"
          />

          {filteredServices.length > 0 ? (
            <div
              className="three-col-grid services-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem'
              }}
            >
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>No matching services found</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Try adjusting your search keywords or view our entire full-stack catalog.
              </p>
              <Button onClick={() => setSearchTerm('')} variant="secondary">
                Reset Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          ARCHITECTURE CTA
          ========================================================= */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge-pill badge-pill-teal">Custom Requirements</span>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>
            Need a Bespoke Architecture Consultation?
          </h2>
          <p style={{ maxWidth: '620px', margin: '0 auto 2rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Our principal software architects can audit your current infrastructure and formulate a phased modernization roadmap.
          </p>
          <Button to="/contact" variant="primary" size="lg" icon={<FiArrowRight />}>
            Schedule an Architectural Review
          </Button>
        </div>
      </section>
    </div>
  );
}
