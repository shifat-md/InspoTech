import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center', // 'center' or 'left'
  badgeColor = 'purple', // 'purple' or 'teal'
  className = ''
}) {
  return (
    <div className={`section-header text-${align} ${className}`}>
      {badge && (
        <span className={`badge-pill ${badgeColor === 'teal' ? 'badge-pill-teal' : ''}`}>
          <span className="pulse-dot" />
          {badge}
        </span>
      )}
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
