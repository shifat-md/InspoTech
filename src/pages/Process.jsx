import React from 'react';
import { FiCheckCircle, FiArrowRight, FiFileText, FiCode, FiCpu, FiShield, FiCloud } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { homeData } from '../data/homeData';

const detailedPhases = [
  {
    phase: 'Phase 01',
    title: 'Discovery, Technical Audit & System Blueprint',
    duration: 'Week 1 – 2',
    icon: FiFileText,
    description: 'We dig deep into your product vision, existing architectural stack, business logic constraints, and traffic forecasts to construct a clear roadmap.',
    activities: [
      'Comprehensive code and infrastructure health audit',
      'Entity relationship mapping & relational schema design',
      'API contract specification (REST / GraphQL)',
      'Milestone-based project statement of work (SOW)'
    ],
    deliverables: 'Architecture Blueprint Document, API Contract Draft, Database Schema Specification'
  },
  {
    phase: 'Phase 02',
    title: 'Component Tokenization & Interface Prototyping',
    duration: 'Week 2 – 3',
    icon: FiCode,
    description: 'We convert wireframes and design tokens into accessible React layout foundations, validating responsive breakpoints on real devices.',
    activities: [
      'Authored CSS variables setup (color tokens, typography clamps, spacing scales)',
      'WCAG 2.1 AA keyboard focus management and screen reader landmarks',
      'Interactive micro-interaction and animation testing',
      'Responsive verification on iOS, Android, tablets, and ultrawide viewports'
    ],
    deliverables: 'Modular React UI Library, Theme Configuration, Interactive Staging Sandbox'
  },
  {
    phase: 'Phase 03',
    title: 'Agile Full-Stack Feature Sprints',
    duration: 'Week 3 – 8+',
    icon: FiCpu,
    description: 'Iterative, two-week development cycles building endpoints, business logic, state synchronization, and database indices.',
    activities: [
      'Clean decoupled Node.js microservices / express controllers',
      'PostgreSQL schema migrations with zero write locks',
      'Optimistic client UI state updates backed by idempotent endpoints',
      'Weekly live video demo and staging environment updates'
    ],
    deliverables: 'Bi-weekly Working Staging Deployments, Automated Unit Test Suites'
  },
  {
    phase: 'Phase 04',
    title: 'Rigorous Quality Assurance & Performance Auditing',
    duration: 'Sprint Polish',
    icon: FiShield,
    description: 'Stress testing, load simulations, and performance optimization to ensure sub-second interaction times and rock-solid stability.',
    activities: [
      'End-to-end automated smoke testing with Playwright',
      'Google Lighthouse audits targeting 95+ in Performance and Accessibility',
      'OWASP Top 10 security review and dependency vulnerability scanning',
      'Database query load testing under simulated high concurrency'
    ],
    deliverables: 'QA Audit Report, Performance Benchmark Metrics, Security Clearance Sheet'
  },
  {
    phase: 'Phase 05',
    title: 'Zero-Downtime Deployment & Cloud Handover',
    duration: 'Launch Week',
    icon: FiCloud,
    description: 'Smooth production transition utilizing automated CI/CD pipelines, container orchestration, and continuous telemetry monitoring.',
    activities: [
      'Blue/green or rolling zero-downtime container releases',
      'DNS migration, SSL certificate issuance, and CDN caching configuration',
      'Real-time error tracking and latency telemetry alerts setup',
      'Complete repository, asset, and documentation handover'
    ],
    deliverables: 'Live Production Environment, Git Repositories, Handover Documentation'
  }
];

export default function Process() {
  return (
    <div className="process-page">
      <section className="section-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge-pill">Proven Methodology</span>
          <h1 style={{ maxWidth: '850px', margin: '0 auto 1.5rem', lineHeight: '1.2' }}>
            Our Full-Stack Engineering Process
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto 2.5rem', fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            How we take complex software requirements and turn them into resilient, high-speed production web applications with zero drama.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-dark-secondary)' }}>
        <div className="container-narrow">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {detailedPhases.map((phase, idx) => {
              const IconComp = phase.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '2.5rem',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span className="badge-pill" style={{ margin: 0 }}>
                      {phase.phase}
                    </span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--color-teal)', fontWeight: 600 }}>
                      {phase.duration}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <IconComp size={24} color="var(--color-purple)" />
                    {phase.title}
                  </h2>

                  <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                    {phase.description}
                  </p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <strong style={{ fontSize: '0.92rem', color: 'var(--text-white)' }}>Key Activities:</strong>
                    <ul style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {phase.activities.map((act, aIdx) => (
                        <li key={aIdx} style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                          <FiCheckCircle size={16} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--color-teal)' }}>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--text-white)', textTransform: 'uppercase' }}>Deliverables: </strong>
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{phase.deliverables}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Ready to Kick Off Sprint Zero?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Schedule a technical discovery session with our lead architects.
            </p>
            <Button to="/contact" variant="primary" size="lg" icon={<FiArrowRight />}>
              Start Phase 01 Discovery
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
