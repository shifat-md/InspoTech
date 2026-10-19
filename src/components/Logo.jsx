import React from 'react';

export default function Logo({ size = 36, className = '' }) {
  return (
    <div
      className={`brand-logo-wrapper ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '10px',
        background: 'linear-gradient(135deg, #642CD7 0%, #7C4DFF 50%, #14B8A6 100%)',
        boxShadow: '0 0 16px rgba(124, 77, 255, 0.45)',
        padding: '6px',
        flexShrink: 0
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Modern InspoTech 'I' Mark with Tech Spark */}
        <circle cx="18" cy="8" r="3.5" fill="#FFFFFF" />
        <rect x="15" y="14" width="6" height="15" rx="3" fill="#FFFFFF" />
        <path
          d="M 11 19 L 7 21 L 11 23"
          stroke="#14B8A6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 25 19 L 29 21 L 25 23"
          stroke="#B996FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
