import React, { useState } from 'react';
import { FiCheck, FiCopy, FiTerminal } from 'react-icons/fi';
import { homeData } from '../data/homeData';

export default function HeroTerminal() {
  const [copied, setCopied] = useState(false);
  const { terminalSnippet } = homeData.hero;

  const handleCopy = () => {
    const rawText = terminalSnippet.lines.map((l) => `${l.code} ${l.comment}`).join('\n');
    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="hero-visual-card animate-float"
      style={{
        position: 'relative',
        background: '#121020',
        border: '1px solid rgba(124, 77, 255, 0.35)',
        borderRadius: '16px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(100, 44, 215, 0.25)',
        overflow: 'hidden',
        width: '100%'
      }}
    >
      {/* Terminal window header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.85rem 1.25rem',
          background: '#19162D',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }} />
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }} />
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }} />
          <div
            style={{
              marginLeft: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.82rem',
              color: 'var(--color-light-purple)',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <FiTerminal size={14} />
            <span>{terminalSnippet.filename}</span>
          </div>
        </div>

        <button
          onClick={handleCopy}
          aria-label="Copy code snippet"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            fontSize: '0.78rem',
            color: 'var(--text-secondary)',
            background: 'rgba(255, 255, 255, 0.06)',
            padding: '4px 10px',
            borderRadius: '6px'
          }}
        >
          {copied ? (
            <>
              <FiCheck size={14} color="var(--color-teal)" />
              <span style={{ color: 'var(--color-teal)' }}>Copied!</span>
            </>
          ) : (
            <>
              <FiCopy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code window body */}
      <div
        style={{
          padding: '1.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.92rem',
          lineHeight: '1.8',
          overflowX: 'auto',
          backgroundColor: '#0F0D1A'
        }}
      >
        {terminalSnippet.lines.map((line, index) => (
          <div key={index} style={{ display: 'flex', gap: '1.25rem' }}>
            <span style={{ color: 'rgba(255, 255, 255, 0.25)', userSelect: 'none', width: '20px', textAlign: 'right' }}>
              {index + 1}
            </span>
            <span style={{ color: index === 0 ? '#B996FF' : '#E5E7EB', flexGrow: 1 }}>
              {line.code}
            </span>
            {line.comment && (
              <span style={{ color: '#14B8A6', fontStyle: 'italic', opacity: 0.85 }}>
                {line.comment}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Floating status badge overlay */}
      <div
        style={{
          padding: '0.85rem 1.25rem',
          background: 'rgba(23, 21, 43, 0.95)',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.82rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="pulse-dot" />
          <span style={{ color: 'var(--text-secondary)' }}>Full-Stack Cluster Status:</span>
          <strong style={{ color: 'var(--color-teal)' }}>Optimal (100%)</strong>
        </div>
        <span style={{ color: 'var(--color-light-purple)', fontFamily: 'var(--font-mono)' }}>
          React 18 + Node.js
        </span>
      </div>
    </div>
  );
}
