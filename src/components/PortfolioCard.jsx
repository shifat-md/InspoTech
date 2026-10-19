import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

export default function PortfolioCard({ project }) {
  const { id, title, category, shortDesc, image, technologies } = project;

  return (
    <div className="portfolio-card">
      <div className="portfolio-image-wrap">
        <img
          src={image}
          alt={`${title} project preview`}
          className="portfolio-image"
          loading="lazy"
          onError={(e) => {
            // Graceful fallback if image is missing
            e.currentTarget.style.display = 'none';
          }}
        />
        <span className="portfolio-category-pill">{category}</span>
      </div>

      <div className="portfolio-content">
        <h3 className="portfolio-title">{title}</h3>
        <p className="portfolio-desc">{shortDesc}</p>

        {technologies && technologies.length > 0 && (
          <div className="service-tags" style={{ marginBottom: '1.25rem' }}>
            {technologies.slice(0, 4).map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
            {technologies.length > 4 && (
              <span className="tech-tag">+{technologies.length - 4}</span>
            )}
          </div>
        )}

        <div className="portfolio-footer">
          <Link to={`/portfolio/${id}`} className="learn-more-link" style={{ color: 'var(--color-teal)' }}>
            <span>View Case Study</span>
            <FiArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </div>
  );
}
