import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiCheck, FiCpu, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import Button from '../components/Button';
import { portfolioData } from '../data/portfolioData';

export default function CaseStudy() {
  const { id } = useParams();
  const project = portfolioData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="container" style={{ padding: '8rem 1.5rem', textAlign: 'center' }}>
        <h2>Case Study Not Found</h2>
        <p style={{ margin: '1.5rem 0' }}>The requested project case study could not be located.</p>
        <Button to="/portfolio" variant="primary" icon={<FiArrowLeft />} iconPosition="left">
          Return to Portfolio
        </Button>
      </div>
    );
  }

  return (
    <div className="case-study-page">
      <section className="section-hero">
        <div className="container">
          <Link
            to="/portfolio"
            className="learn-more-link"
            style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <FiArrowLeft size={16} />
            <span>Back to All Case Studies</span>
          </Link>

          <span className="portfolio-category-pill" style={{ position: 'static', marginBottom: '1rem', display: 'inline-block' }}>
            {project.category}
          </span>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', marginBottom: '1.25rem' }}>
            {project.title}
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '850px', lineHeight: '1.7', marginBottom: '2.5rem' }}>
            {project.overview}
          </p>

          {/* Project Metadata Ribbon */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.5rem',
              padding: '1.75rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              marginBottom: '3rem'
            }}
          >
            <div>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Client / Context</span>
              <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-white)', marginTop: '0.2rem' }}>
                {project.client}
              </div>
            </div>
            <div>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Delivery Duration</span>
              <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-white)', marginTop: '0.2rem' }}>
                {project.duration}
              </div>
            </div>
            <div>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Deployment Year</span>
              <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-white)', marginTop: '0.2rem' }}>
                {project.year}
              </div>
            </div>
            <div>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Primary Stack</span>
              <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--color-teal)', marginTop: '0.2rem' }}>
                {project.technologies.slice(0, 3).join(', ')}
              </div>
            </div>
          </div>

          {/* Project Featured Image Mockup */}
          <div
            style={{
              width: '100%',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              border: '1px solid var(--border-color)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
            }}
          >
            <img
              src={project.image}
              alt={`${project.title} Interface Mockup`}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Metrics / Measurable Outcomes */}
      {project.outcomes && (
        <section className="section" style={{ backgroundColor: 'var(--bg-dark-secondary)' }}>
          <div className="container">
            <h3 style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.6rem' }}>
              Verified Performance Impact &amp; Outcomes
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '2rem'
              }}
            >
              {project.outcomes.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    padding: '2rem',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-teal)', marginBottom: '0.5rem' }}>
                    {item.metric}
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Goals, Challenges, Solutions */}
      <section className="section">
        <div className="container">
          <div
            className="two-col-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem'
            }}
          >
            {/* Project Goals */}
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem'
              }}
            >
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <FiCheck color="var(--color-teal)" />
                Core Project Goals
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {project.goals.map((goal, idx) => (
                  <li key={idx} style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    • {goal}
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Solutions */}
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem'
              }}
            >
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <FiCpu color="var(--color-light-purple)" />
                Architecture &amp; Solutions
              </h3>
              <div style={{ marginBottom: '1.25rem' }}>
                <strong style={{ color: 'var(--text-white)', fontSize: '0.95rem' }}>Challenges Overcome:</strong>
                <ul style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {project.challenges.map((c, idx) => (
                    <li key={idx} style={{ fontSize: '0.94rem', color: 'var(--text-secondary)' }}>
                      - {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <strong style={{ color: 'var(--text-white)', fontSize: '0.95rem' }}>Engineering Solutions:</strong>
                <ul style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {project.solutions.map((s, idx) => (
                    <li key={idx} style={{ fontSize: '0.94rem', color: 'var(--text-secondary)' }}>
                      ✓ {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="section" style={{ backgroundColor: 'var(--bg-dark-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
            Ready to Build a High-Performing Solution Like This?
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Discuss your technical goals with our full-stack engineers and receive a scoped execution plan.
          </p>
          <Button to="/contact" variant="primary" size="lg" icon={<FiArrowRight />}>
            Start a Conversation
          </Button>
        </div>
      </section>
    </div>
  );
}
