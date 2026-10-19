import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiHelpCircle, FiArrowRight } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { faqData } from '../data/faqData';

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});

  const toggleAccordion = (catIdx, itemIdx) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="faq-page">
      <section className="section-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge-pill">Common Inquiries</span>
          <h1 style={{ maxWidth: '850px', margin: '0 auto 1.5rem', lineHeight: '1.2' }}>
            Frequently Asked Questions
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto 2.5rem', fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            Everything you need to know about our engineering standards, project delivery timelines, pricing structure, and ongoing support.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-dark-secondary)' }}>
        <div className="container-narrow">
          {faqData.map((categoryGroup, catIdx) => (
            <div key={catIdx} style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.6rem', color: 'var(--color-teal)', marginBottom: '1.5rem' }}>
                {categoryGroup.category}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {categoryGroup.items.map((item, itemIdx) => {
                  const key = `${catIdx}-${itemIdx}`;
                  const isOpen = !!openItems[key];

                  return (
                    <div
                      key={itemIdx}
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        transition: 'border-color var(--transition-fast)'
                      }}
                    >
                      <button
                        onClick={() => toggleAccordion(catIdx, itemIdx)}
                        aria-expanded={isOpen}
                        style={{
                          width: '100%',
                          padding: '1.25rem 1.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '1rem',
                          textAlign: 'left',
                          color: isOpen ? 'var(--color-light-purple)' : 'var(--text-white)',
                          fontWeight: 600,
                          fontSize: '1.05rem',
                          background: isOpen ? 'rgba(124, 77, 255, 0.08)' : 'transparent'
                        }}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                          <FiHelpCircle size={18} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                          {item.question}
                        </span>
                        {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                      </button>

                      {isOpen && (
                        <div
                          style={{
                            padding: '1.25rem 1.5rem 1.5rem',
                            color: 'var(--text-secondary)',
                            fontSize: '0.98rem',
                            lineHeight: '1.7',
                            borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                          }}
                        >
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Unanswered question box */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem',
              textAlign: 'center',
              marginTop: '4rem'
            }}
          >
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Have a question not listed here?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              We're happy to answer any technical or process questions you have regarding your project.
            </p>
            <Button to="/contact" variant="primary" icon={<FiArrowRight />}>
              Contact Our Engineers Directly
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
