import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiInfo
} from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { siteConfig } from '../data/siteConfig';
import { servicesData } from '../data/servicesData';

export default function Contact() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    serviceType: 'Full-Stack Web Development',
    budget: '$15k – $30k',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'simulated', 'error'

  // Pre-fill service from query param if coming from a service page (?service=...)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, serviceType: serviceParam }));
    }
  }, [location.search]);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address (e.g. name@domain.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Project subject is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your project or inquiry.';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters long to provide sufficient detail.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate network submission delay
    // NOTE: Replace this timeout with your actual backend endpoint or email provider (e.g. EmailJS, Resend, Formspree)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        serviceType: 'Full-Stack Web Development',
        budget: '$15k – $30k',
        message: ''
      });
    }, 1200);
  };

  return (
    <div className="contact-page">
      {/* =========================================================
          CONTACT HERO
          ========================================================= */}
      <section className="section-hero">
        <div className="bg-glow-orb bg-glow-purple" style={{ top: '-100px', right: '-150px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="badge-pill">Get in Touch</span>
          <h1 style={{ maxWidth: '850px', margin: '0 auto 1.5rem', lineHeight: '1.2' }}>
            Let's Architect Your Next Web Solution
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            Have a new web application, platform migration, or API project? Our senior engineers are ready to discuss your requirements.
          </p>
        </div>
      </section>

      {/* =========================================================
          CONTACT CONTENT & FORM
          ========================================================= */}
      <section className="section" style={{ backgroundColor: 'var(--bg-dark-secondary)' }}>
        <div className="container">
          <div
            className="two-col-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '0.9fr 1.1fr',
              gap: '4rem',
              alignItems: 'flex-start'
            }}
          >
            {/* Left: Contact Info & Office Details */}
            <div>
              <span className="badge-pill badge-pill-teal">Direct Contact</span>
              <h2 style={{ fontSize: '2.1rem', marginBottom: '1.25rem' }}>
                We're Here to Help You Succeed
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                Fill out the project inquiry form, or contact us directly via email or phone. We review inquiries daily and respond within 24 business hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '3rem' }}>
                <div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1.5rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '10px',
                      background: 'rgba(124, 77, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-light-purple)',
                      flexShrink: 0
                    }}
                  >
                    <FiMail size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Email Inquiries</span>
                    <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-white)', marginTop: '0.2rem' }}>
                      <a href={`mailto:${siteConfig.contact.email}`} className="footer-link">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                    <span style={{ fontSize: '0.82rem', color: 'var(--color-teal)' }}>{siteConfig.contact.responseGuarantee}</span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1.5rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '10px',
                      background: 'rgba(20, 184, 166, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-teal)',
                      flexShrink: 0
                    }}
                  >
                    <FiPhone size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Direct Phone</span>
                    <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-white)', marginTop: '0.2rem' }}>
                      <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="footer-link">
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Direct line to engineering lead</span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1.5rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '10px',
                      background: 'rgba(124, 77, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-light-purple)',
                      flexShrink: 0
                    }}
                  >
                    <FiMapPin size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Engineering HQ</span>
                    <div style={{ fontSize: '1.02rem', fontWeight: 600, color: 'var(--text-white)', marginTop: '0.2rem' }}>
                      {siteConfig.contact.address}
                    </div>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{siteConfig.contact.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Validated Project Inquiry Form */}
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-xl)',
                padding: '2.5rem',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
              }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Start a Project Inquiry</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
                Tell us about your project goals. Fields marked with <span style={{ color: '#F87171' }}>*</span> are required.
              </p>

              {/* Feedback Alert States */}
              {submissionStatus === 'success' && (
                <div className="alert-box alert-success" role="alert">
                  <FiCheckCircle size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Inquiry Submitted Successfully!</strong>
                    <span>Thank you for reaching out. A senior engineering manager will review your submission and reply within 24 business hours.</span>
                  </div>
                </div>
              )}

              {/* Notice explaining API connection point */}
              <div className="alert-box alert-info" style={{ fontSize: '0.85rem', padding: '0.85rem 1rem' }}>
                <FiInfo size={18} style={{ flexShrink: 0, marginTop: '1px' }} />
                <span>
                  <strong>Frontend Demo Mode:</strong> This form validates all fields and simulates submission. To connect to your backend or email provider (e.g. EmailJS, Resend, or AWS SES), update the handler in <code>Contact.jsx</code>.
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Connor"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    aria-required="true"
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                  {errors.name && (
                    <div className="form-error-feedback">
                      <FiAlertCircle size={14} />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Business Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="sarah@company.com"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && (
                    <div className="form-error-feedback">
                      <FiAlertCircle size={14} />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Service Type Selection */}
                <div className="form-group">
                  <label htmlFor="serviceType" className="form-label">
                    Primary Service Needed
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="form-control"
                    style={{ backgroundColor: 'var(--bg-input)', color: 'var(--text-white)' }}
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="General Architectural Inquiry">General Architectural Inquiry</option>
                  </select>
                </div>

                {/* Budget Range (Optional) */}
                {/* <div className="form-group">
                  <label htmlFor="budget" className="form-label">
                    Estimated Budget Range (Optional)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-control"
                    style={{ backgroundColor: 'var(--bg-input)', color: 'var(--text-white)' }}
                  >
                    <option value="Under $15k">Under $15k (Sprint Exploration)</option>
                    <option value="$15k – $30k">$15k – $30k (MVP or Redesign)</option>
                    <option value="$30k – $60k">$30k – $60k (Comprehensive Full-Stack)</option>
                    <option value="$60k+">$60k+ (Enterprise Multi-Month Platform)</option>
                  </select>
                </div> */}

                {/* Subject Field */}
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Project Subject <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Modernizing our SaaS dashboard to React & Node"
                    className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                    aria-required="true"
                    aria-invalid={errors.subject ? 'true' : 'false'}
                  />
                  {errors.subject && (
                    <div className="form-error-feedback">
                      <FiAlertCircle size={14} />
                      <span>{errors.subject}</span>
                    </div>
                  )}
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Project Details &amp; Scope <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your product goals, timeline, existing stack, and any specific challenges..."
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    aria-required="true"
                    aria-invalid={errors.message ? 'true' : 'false'}
                  />
                  {errors.message && (
                    <div className="form-error-feedback">
                      <FiAlertCircle size={14} />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  style={{ width: '100%' }}
                  icon={<FiSend />}
                >
                  {isSubmitting ? 'Validating & Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
