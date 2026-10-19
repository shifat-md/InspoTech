import React, { useState } from 'react';
import { FiBriefcase, FiMapPin, FiClock, FiDollarSign, FiCheck, FiArrowRight } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { siteConfig } from '../data/siteConfig';

const openRoles = [
  {
    id: 'senior-full-stack',
    title: 'Senior Full-Stack Engineer (React + Node.js)',
    department: 'Engineering',
    location: 'Remote (Global)',
    type: 'Full-time',
    salary: '$130k – $160k USD',
    description: 'We are looking for a senior developer with extensive React and Node.js experience to lead full-stack sprint teams and architect client platforms.',
    requirements: [
      '5+ years professional experience building web applications in React and Node.js',
      'Deep mastery of PostgreSQL relational schema design and query optimization',
      'Demonstrated understanding of web performance, Core Web Vitals, and accessibility (WCAG AA)',
      'Experience with Docker, continuous integration, and modern cloud deployment environments'
    ]
  },
  {
    id: 'lead-frontend-engineer',
    title: 'Lead Front-End Architect',
    department: 'Frontend Engineering',
    location: 'Remote (US / EU / CA)',
    type: 'Full-time',
    salary: '$140k – $170k USD',
    description: 'Lead client interface design systems, optimize rendering lifecycles, and craft interactive animations using modern CSS and React.',
    requirements: [
      'Deep knowledge of authored CSS (CSS Custom Properties, container queries, :has()) without reliance on utility frameworks',
      'Track record delivering 95+ Lighthouse Performance scores in production',
      'Strong eye for micro-interactions, layout polish, and Figma design token translation',
      'Experience architecting reusable component libraries with comprehensive test coverage'
    ]
  },
  {
    id: 'devops-cloud-engineer',
    title: 'DevOps & Cloud Systems Engineer',
    department: 'Infrastructure',
    location: 'Remote (US / EU)',
    type: 'Full-time',
    salary: '$135k – $165k USD',
    description: 'Architect automated zero-downtime CI/CD deployment pipelines, manage container clusters, and harden production application security.',
    requirements: [
      'Extensive hands-on experience with Docker, AWS/GCP infrastructure, and Terraform',
      'Proficiency in automated telemetry, Prometheus, Grafana, and error tracking systems',
      'Strong understanding of API security gateways, TLS encryption, and rate-limiting',
      'Experience managing database read-replicas, point-in-time backups, and disaster recovery'
    ]
  }
];

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <div className="careers-page">
      <section className="section-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge-pill">{siteConfig.badges.hiring}</span>
          <h1 style={{ maxWidth: '850px', margin: '0 auto 1.5rem', lineHeight: '1.2' }}>
            Build Resilient Software With a Senior Engineering Team
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto 2.5rem', fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            Join a remote-first collective that values clean code, developer autonomy, and craft over endless corporate meetings.
          </p>
        </div>
      </section>

      {/* Perks & Culture */}
      <section className="section" style={{ backgroundColor: 'var(--bg-dark-secondary)' }}>
        <div className="container">
          <SectionHeading
            badge="Why Join Egnisher"
            title="Work That Respects Your Craft"
            subtitle="We give engineers the space and tools to do their best work without micromanagement."
            align="center"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
            }}
          >
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-teal)' }}>100% Remote-First</h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)' }}>
                Work from anywhere with high-speed internet. Flexible working hours centered around asynchronous collaboration.
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-light-purple)' }}>Latest Hardware Budget</h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)' }}>
                Up to $4,000 workstation allowance to equip yourself with the best MacBook Pro, monitor, and peripherals.
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-teal)' }}>Learning &amp; Growth</h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)' }}>
                $2,000 annual personal stipend for technical conferences, courses, books, and software subscriptions.
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-light-purple)' }}>Zero Bureaucracy</h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)' }}>
                No middle management layers or endless status meetings. Direct engineering decisions and transparent sprint ownership.
              </p>
            </div>
          </div>

          {/* Open Positions List */}
          <SectionHeading
            badge="Open Positions"
            title="Current Engineering Opportunities"
            subtitle="Click any position to review detailed requirements and submit your GitHub profile."
            align="center"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
            {openRoles.map((role) => (
              <div
                key={role.id}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.35rem' }}>{role.title}</h3>
                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.88rem', flexWrap: 'wrap' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <FiBriefcase size={14} /> {role.department}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <FiMapPin size={14} /> {role.location}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <FiClock size={14} /> {role.type}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--color-teal)' }}>
                        <FiDollarSign size={14} /> {role.salary}
                      </span>
                    </div>
                  </div>

                  <a
                    href={`mailto:careers@egnisher.dev?subject=Application for ${encodeURIComponent(role.title)}`}
                    className="btn btn-primary btn-sm"
                  >
                    <span>Apply Now</span>
                    <FiArrowRight size={15} />
                  </a>
                </div>

                <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {role.description}
                </p>

                <div>
                  <strong style={{ fontSize: '0.88rem', color: 'var(--text-white)' }}>Core Requirements:</strong>
                  <ul style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {role.requirements.map((req, rIdx) => (
                      <li key={rIdx} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <FiCheck size={16} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
