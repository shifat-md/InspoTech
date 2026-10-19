import React from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiCalendar, FiArrowRight } from 'react-icons/fi';

export default function BlogCard({ post }) {
  const { id, title, category, author, date, readTime, image, excerpt } = post;

  return (
    <article className="blog-card">
      <div className="blog-thumb-wrap">
        <img
          src={image}
          alt={`Illustration for article: ${title}`}
          className="blog-thumb"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <span className="blog-meta-tag">{category}</span>
      </div>

      <div className="blog-card-body">
        <div className="blog-date-row">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <FiCalendar size={14} />
            {date}
          </span>
          <span>•</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <FiClock size={14} />
            {readTime}
          </span>
        </div>

        <h3 className="blog-title">
          <Link to={`/blog/${id}`} style={{ color: 'inherit' }}>
            {title}
          </Link>
        </h3>

        <p className="blog-excerpt">{excerpt}</p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1rem', marginTop: 'auto' }}>
          <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
            By <strong style={{ color: 'var(--text-primary)' }}>{author}</strong>
          </span>
          <Link to={`/blog/${id}`} className="learn-more-link" style={{ color: 'var(--color-teal)' }}>
            <span>Read Article</span>
            <FiArrowRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
