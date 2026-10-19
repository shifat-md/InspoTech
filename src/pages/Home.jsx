import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiCode, FiLayers, FiShield, FiZap } from 'react-icons/fi';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import PortfolioCard from '../components/PortfolioCard';
import TeamCard from '../components/TeamCard';
import BlogCard from '../components/BlogCard';
import TestimonialSlider from '../components/TestimonialSlider';
import TechStackSlider from '../components/TechStackSlider';
import HeroTerminal from '../components/HeroTerminal';

import { homeData } from '../data/homeData';
import { servicesData } from '../data/servicesData';
import { portfolioData } from '../data/portfolioData';
import { teamMembers } from '../data/teamData';
import { blogData } from '../data/blogData';
import { siteConfig } from '../data/siteConfig';

export default function Home() {
  const { hero, trust, process, ctaBanner } = homeData;

  // Select top 6 services for home overview
  const featuredServices = servicesData.slice(0, 6);
  // Select top 3 portfolio items for home
  const featuredProjects = portfolioData.slice(0, 3);
  // Select top 4 team members for preview
  const featuredTeam = teamMembers.slice(0, 4);
  // Select top 3 blog articles for preview
  const featuredBlogs = blogData.slice(0, 3);

  return (
    <div className="home-page">
      {/* =========================================================
          1. HERO SECTION
          ========================================================= */}
      <section className="section-hero">
        <div className="bg-glow-orb bg-glow-purple" style={{ top: '-100px', left: '-150px' }} />
        <div className="bg-glow-orb bg-glow-teal" style={{ top: '200px', right: '-150px' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            className="hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 0.85fr',
              alignItems: 'center',
              gap: '3.5rem'
            }}
          >
            {/* Left Hero Content */}
            <div className="animate-fade-in">
              <div className="hero-badge-wrap" style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span className="badge-pill">
                  <span className="pulse-dot" />
                  {hero.badge}
                </span>
              </div>

              <h1 style={{ marginBottom: '1.5rem', lineHeight: '1.15' }}>
                {hero.headlinePart1}{' '}
                <span className="gradient-text">{hero.headlineHighlight}</span>{' '}
                {hero.headlinePart2}
              </h1>

              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.7', maxWidth: '600px' }}>
                {hero.description}
              </p>

              <div
                className="hero-actions"
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}
              >
                <Button to={hero.primaryCta.path} variant="primary" size="lg" icon={<FiArrowRight />}>
                  {hero.primaryCta.label}
                </Button>
                <Button to={hero.secondaryCta.path} variant="outline" size="lg">
                  {hero.secondaryCta.label}
                </Button>
              </div>

              {/* Quick Trust Highlights */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2rem',
                  flexWrap: 'wrap',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '1.75rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <FiCheckCircle color="var(--color-teal)" size={18} />
                  <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>Senior-Only Engineering</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <FiCheckCircle color="var(--color-teal)" size={18} />
                  <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>Sub-Second Core Web Vitals</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <FiCheckCircle color="var(--color-teal)" size={18} />
                  <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>Zero Technical Debt Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual / Interactive Code Terminal */}
            <div>
              <HeroTerminal />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECH TICKER SLIDER (React Slick)
          ========================================================= */}
      <section style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', background: 'var(--bg-dark-secondary)' }}>
        <div className="container">
          <TechStackSlider />
        </div>
      </section>

      {/* =========================================================
          2. TRUST & STATS SECTION
          ========================================================= */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge={trust.badge}
            title={trust.title}
            subtitle={trust.description}
            align="center"
          />

          {/* Stats Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginBottom: '4.5rem',
              padding: '2.5rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)'
            }}
          >
            {siteConfig.stats.map((stat, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-white)', marginBottom: '0.25rem' }}>
                  <span className="gradient-text">{stat.value}</span>
                </div>
                <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Engineering Pillars Grid */}
          <div
            className="two-col-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem'
            }}
          >
            {trust.pillars.map((pillar) => (
              <div
                key={pillar.id}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  padding: '2rem',
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    background: 'rgba(124, 77, 255, 0.15)',
                    border: '1px solid rgba(124, 77, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-teal)',
                    flexShrink: 0
                  }}
                >
                  {pillar.id === 'architecture' && <FiLayers size={24} />}
                  {pillar.id === 'speed' && <FiZap size={24} />}
                  {pillar.id === 'security' && <FiShield size={24} />}
                  {pillar.id === 'delivery' && <FiCheckCircle size={24} />}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{pillar.title}</h3>
                  <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          3. SERVICES OVERVIEW
          ========================================================= */}
      <section className="section" style={{ backgroundColor: 'var(--bg-dark-secondary)' }}>
        <div className="container">
          <SectionHeading
            badge="Full-Stack Capabilities"
            title="Comprehensive Services Engineered for Modern Scale"
            subtitle="From responsive client interfaces to distributed backend clusters and resilient database models."
            align="center"
          />

          <div
            className="three-col-grid services-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              marginBottom: '3rem'
            }}
          >
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Button to="/services" variant="secondary" size="lg" icon={<FiArrowRight />}>
              View All 10 Full-Stack Services
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. ABOUT PREVIEW
          ========================================================= */}
      <section className="section">
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
              <span className="badge-pill">About Our Philosophy</span>
              <h2 style={{ marginBottom: '1.5rem', lineHeight: '1.25' }}>
                We Combine <span className="gradient-text">Design Intuition</span> with Deep Architectural Rigor
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                {siteConfig.name} was formed by senior architects who rejected the false compromise between beautiful frontends and stable backends. We build unified, end-to-end web experiences that delight end users and satisfy the most demanding enterprise security audits.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Every project is staffed exclusively by senior developers with deep hands-on expertise in React, Node.js, relational data modeling, and cloud delivery.
              </p>

              <Button to="/about" variant="primary" icon={<FiArrowRight />}>
                Read Our Full Agency Story
              </Button>
            </div>

            {/* Architecture Highlight Card */}
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-xl)',
                padding: '2.5rem',
                position: 'relative'
              }}
            >
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.5rem' }}>Our Engineering Guarantees</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <li style={{ display: 'flex', gap: '0.85rem' }}>
                  <FiCheckCircle size={20} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-white)' }}>No Junior Hand-offs:</strong>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0 }}>
                      You work directly with the senior engineers writing your code.
                    </p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '0.85rem' }}>
                  <FiCheckCircle size={20} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-white)' }}>100% Code Ownership:</strong>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0 }}>
                      All repositories, assets, and documentation belong completely to your team.
                    </p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '0.85rem' }}>
                  <FiCheckCircle size={20} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-white)' }}>Zero Framework Bloat:</strong>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0 }}>
                      Clean, modular React and authored CSS—no bloated CSS utility frameworks.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. FEATURED PORTFOLIO
          ========================================================= */}
      <section className="section" style={{ backgroundColor: 'var(--bg-dark-secondary)' }}>
        <div className="container">
          <SectionHeading
            badge="Selected Case Studies"
            title="Production Software Built for Scale & Impact"
            subtitle="Explore how our full-stack solutions solve critical challenges for high-growth digital businesses."
            align="center"
          />

          <div
            className="three-col-grid portfolio-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              marginBottom: '3rem'
            }}
          >
            {featuredProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Button to="/portfolio" variant="secondary" size="lg" icon={<FiArrowRight />}>
              Explore All Case Studies &amp; Filters
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. OUR PROCESS
          ========================================================= */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge={process.badge}
            title={process.title}
            subtitle={process.subtitle}
            align="center"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              marginTop: '3.5rem'
            }}
          >
            {process.steps.map((stepItem, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: 'var(--color-light-purple)',
                    opacity: 0.6,
                    marginBottom: '1rem'
                  }}
                >
                  {stepItem.step}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{stepItem.title}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {stepItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          7. TEAM PREVIEW
          ========================================================= */}
      <section className="section" style={{ backgroundColor: 'var(--bg-dark-secondary)' }}>
        <div className="container">
          <SectionHeading
            badge="Engineering Leadership"
            title="Meet the Minds Behind the Architecture"
            subtitle="A senior collective of software architects, designers, and systems engineers."
            align="center"
          />

          <div
            className="team-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}
          >
            {featuredTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Button to="/about#team" variant="secondary" size="lg" icon={<FiArrowRight />}>
              View Full Team &amp; Working Pagination
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================
          8. TESTIMONIALS (React Slick Slider)
          ========================================================= */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Sample Client Feedback"
            title="What Technology Leaders Say About Working With Us"
            subtitle="Demonstration testimonials illustrating client satisfaction across speed, code quality, and delivery."
            align="center"
          />

          <TestimonialSlider />
        </div>
      </section>

      {/* =========================================================
          9. BLOG PREVIEW
          ========================================================= */}
      <section className="section" style={{ backgroundColor: 'var(--bg-dark-secondary)' }}>
        <div className="container">
          <SectionHeading
            badge="Engineering Insights"
            title="Fresh Perspectives on Full-Stack Architecture"
            subtitle="In-depth articles written by our active engineers on web standards, Core Web Vitals, and system reliability."
            align="center"
          />

          <div
            className="three-col-grid blog-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              marginBottom: '3rem'
            }}
          >
            {featuredBlogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Button to="/blog" variant="secondary" size="lg" icon={<FiArrowRight />}>
              Browse All Blog Articles
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================
          10. CALL TO ACTION BANNER
          ========================================================= */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="bg-glow-orb bg-glow-purple" style={{ top: '0', left: '20%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(30, 27, 56, 0.9) 0%, rgba(18, 16, 32, 0.95) 100%)',
              border: '1px solid rgba(124, 77, 255, 0.35)',
              borderRadius: 'var(--radius-xl)',
              padding: '4.5rem 3rem',
              textAlign: 'center',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
            }}
          >
            <span className="badge-pill badge-pill-teal">{ctaBanner.badge}</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', maxWidth: '750px', margin: '0 auto 1.5rem', lineHeight: '1.2' }}>
              {ctaBanner.title}
            </h2>
            <p style={{ maxWidth: '650px', margin: '0 auto 2.5rem', fontSize: '1.12rem', color: 'var(--text-secondary)' }}>
              {ctaBanner.description}
            </p>
            <Button to={ctaBanner.buttonPath} variant="primary" size="lg" icon={<FiArrowRight />}>
              {ctaBanner.buttonText}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
