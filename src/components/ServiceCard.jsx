import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import SpotlightCard from './SpotlightCard';
import DynamicIcon from './DynamicIcon';

export default function ServiceCard({ service }) {
  const { id, title, shortDesc, icon, tags } = service;

  return (
    <SpotlightCard className="service-card">
      <div className="service-card-icon">
        <DynamicIcon name={icon} size={28} />
      </div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-desc">{shortDesc}</p>
      
      {tags && tags.length > 0 && (
        <div className="service-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="tech-tag">{tag}</span>
          ))}
        </div>
      )}

      <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
        <Link to={`/services/${id}`} className="learn-more-link">
          <span>Explore Architecture</span>
          <FiArrowRight size={16} />
        </Link>
      </div>
    </SpotlightCard>
  );
}
