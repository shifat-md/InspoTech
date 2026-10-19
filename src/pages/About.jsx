import React, { useState } from 'react';
import { FiCheckCircle, FiLayers, FiShield, FiZap, FiArrowRight } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import TeamCard from '../components/TeamCard';
import Pagination from '../components/Pagination';
import Button from '../components/Button';
import TechStackSlider from '../components/TechStackSlider';

import { aboutData } from '../data/aboutData';
import { teamMembers } from '../data/teamData';
import { siteConfig } from '../data/siteConfig';

export default function About() {
  const { hero, story, missionVision, coreValues, techStack } = aboutData;

  // Working Team Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 4; // Configurable: 4 members per page (8 members total = 2 pages)

  const totalPages = Math.ceil(teamMembers.length / membersPerPage);
  const startIndex = (currentPage - 1) * membersPerPage;
  const currentMembers = teamMembers.slice(startIndex, startIndex + membersPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Smooth scroll down to the team section anchor
    const teamEl = document.getElementById('team');
    if (teamEl) {
      teamEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="about-page">
      {/* =========================================================
          ABOUT HERO SECTION
          ========================================================= */}
      <section className="section-hero">
        <div className="bg-glow-orb bg-glow-purple" style={{ top: '-100px', right: '-100px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="badge-pill">{hero.badge}</span>
          <h1 style={{ maxWidth: '850px', margin: '0 auto 1.5rem', lineHeight: '1.2' }}>
            {hero.title}
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto 2.5rem', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
            {hero.subtitle}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Button to="/contact" variant="primary" size="lg" icon={<FiArrowRight />}>
              Work With Us
            </Button>
            <Button to="/portfolio" variant="outline" size="lg">
              Explore Our Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================
          AGENCY STORY & ORIGIN
          ========================================================= */}
      <section className="section" style={{ backgroundColor: 'var(--bg-dark-secondary)' }}>
        <div className="container">
          <div
            className="two-col-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: '4rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="badge-pill">{story.badge}</span>
              <h2 style={{ marginBottom: '1.5rem', lineHeight: '1.25' }}>{story.title}</h2>
              {story.paragraphs.map((para, idx) => (
                <p key={idx} style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                  {para}
                </p>
              ))}
            </div>

            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-xl)',
                padding: '2.5rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
              }}
            >
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--text-white)' }}>
                Agency Fast Facts
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.85rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Established</span>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-white)' }}>{siteConfig.establishedYear}</div>
                </div>
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.85rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Focus Specialization</span>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-teal)' }}>{siteConfig.subTagline}</div>
                </div>
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.85rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Operating Model</span>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-white)' }}>Senior Engineering Collective</div>
                </div>
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Global Footprint</span>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-white)' }}>Clients across North America, Europe &amp; APAC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION & VISION
          ========================================================= */}
      <section className="section">
        <div className="container">
          <div
            className="two-col-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2.5rem'
            }}
          >
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem'
              }}
            >
              <span className="badge-pill badge-pill-teal">Purpose</span>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{missionVision.mission.title}</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                {missionVision.mission.description}
              </p>
            </div>

            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem'
              }}
            >
              <span className="badge-pill">Aspiration</span>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{missionVision.vision.title}</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                {missionVision.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CORE VALUES
          ========================================================= */}
      <section className="section" style={{ backgroundColor: 'var(--bg-dark-secondary)' }}>
        <div className="container">
          <SectionHeading
            badge="Our Guiding Values"
            title="The Engineering Principles We Stand By"
            subtitle="How we evaluate technical decisions, deliver software, and collaborate with partners."
            align="center"
          />

          <div
            className="two-col-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem'
            }}
          >
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <FiCheckCircle size={22} color="var(--color-teal)" />
                  <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{val.title}</h3>
                </div>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGIES & EXPERTISE GRID
          ========================================================= */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Full Technical Stack"
            title="Modern Tools & Technologies We Master"
            subtitle="We pick the right, modern, standards-compliant tools to guarantee long-term maintainability."
            align="center"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.75rem',
              marginBottom: '3rem'
            }}
          >
            {techStack.map((categoryGroup, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.75rem'
                }}
              >
                <h4 style={{ fontSize: '1.15rem', color: 'var(--color-teal)', marginBottom: '1.25rem' }}>
                  {categoryGroup.category}
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {categoryGroup.tools.map((tool, tIdx) => (
                    <li key={tIdx} style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-purple)' }} />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <TechStackSlider />
        </div>
      </section>

      {/* =========================================================
          TEAM SECTION WITH WORKING PAGINATION (Essential Requirement)
          ========================================================= */}
      <section id="team" className="section" style={{ backgroundColor: 'var(--bg-dark-secondary)' }}>
        <div className="container">
          <SectionHeading
            badge="Our Entire Team"
            title="The Senior Engineers, Architects &amp; Designers"
            subtitle="Meet each member of our technical collective. Use the pagination controls below to browse all team members."
            align="center"
          />

          {/* Paginated Team Grid */}
          <div
            className="team-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
              gap: '2rem'
            }}
          >
            {currentMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          {/* Working Pagination Component */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            totalItems={teamMembers.length}
            itemsPerPage={membersPerPage}
            showInfo={true}
          />
        </div>
      </section>

      {/* =========================================================
          CTA SECTION
          ========================================================= */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>
            Want to Collaborate With Our Senior Team?
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Let's evaluate your architectural goals, map out sprint timelines, and deliver resilient digital solutions.
          </p>
          <Button to="/contact" variant="primary" size="lg" icon={<FiArrowRight />}>
            Contact Our Engineers
          </Button>
        </div>
      </section>
    </div>
  );
}
