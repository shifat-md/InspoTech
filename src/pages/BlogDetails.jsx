import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiClock, FiUser, FiArrowRight, FiTag } from 'react-icons/fi';
import Button from '../components/Button';
import BlogCard from '../components/BlogCard';
import { blogData } from '../data/blogData';

export default function BlogDetails() {
  const { id } = useParams();
  const post = blogData.find((b) => b.id === id);

  if (!post) {
    return (
      <div className="container" style={{ padding: '8rem 1.5rem', textAlign: 'center' }}>
        <h2>Article Not Found</h2>
        <p style={{ margin: '1.5rem 0' }}>The requested article does not exist or has been removed.</p>
        <Button to="/blog" variant="primary" icon={<FiArrowLeft />} iconPosition="left">
          Back to Blog
        </Button>
      </div>
    );
  }

  // Related articles from the same category or other posts
  const relatedPosts = blogData
    .filter((b) => b.id !== post.id)
    .slice(0, 2);

  return (
    <div className="blog-details-page">
      <section className="section-hero" style={{ paddingBottom: '2.5rem' }}>
        <div className="container-narrow">
          <Link
            to="/blog"
            className="learn-more-link"
            style={{ marginBottom: '1.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <FiArrowLeft size={16} />
            <span>Back to All Articles</span>
          </Link>

          <span className="blog-meta-tag" style={{ position: 'static', display: 'inline-block', marginBottom: '1rem' }}>
            {post.category}
          </span>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', lineHeight: '1.25', marginBottom: '1.5rem' }}>
            {post.title}
          </h1>

          {/* Author & Meta Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '1.25rem 0',
              marginBottom: '2.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'var(--gradient-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: '#FFFFFF'
                }}
              >
                {post.author
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <div>
                <strong style={{ color: 'var(--text-white)', display: 'block', fontSize: '0.95rem' }}>
                  {post.author}
                </strong>
                <span style={{ fontSize: '0.82rem', color: 'var(--color-teal)' }}>
                  {post.authorRole}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <FiCalendar size={15} />
                {post.date}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <FiClock size={15} />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Featured Header Illustration */}
          <div
            style={{
              width: '100%',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--border-color)',
              marginBottom: '3rem'
            }}
          >
            <img
              src={post.image}
              alt={`Graphic for ${post.title}`}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          {/* Article Excerpt Callout */}
          <div
            style={{
              background: 'rgba(124, 77, 255, 0.08)',
              borderLeft: '4px solid var(--color-purple)',
              padding: '1.5rem',
              borderRadius: '0 8px 8px 0',
              fontSize: '1.15rem',
              lineHeight: '1.7',
              color: 'var(--text-primary)',
              marginBottom: '3rem',
              fontStyle: 'italic'
            }}
          >
            "{post.excerpt}"
          </div>

          {/* Rich Content Sections */}
          <div className="article-body" style={{ fontSize: '1.08rem', lineHeight: '1.8' }}>
            {post.content.map((sec, idx) => (
              <div key={idx} style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.65rem', color: 'var(--text-white)', marginBottom: '1rem', marginTop: '1.5rem' }}>
                  {sec.heading}
                </h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  {sec.body}
                </p>
              </div>
            ))}
          </div>

          {/* Tags */}
          {post.tags && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.75rem', marginTop: '2.5rem' }}>
              <FiTag size={16} color="var(--color-teal)" />
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Tags:</span>
              {post.tags.map((tag, idx) => (
                <span key={idx} className="tech-tag" style={{ padding: '0.35rem 0.75rem' }}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Related Posts */}
      <section className="section" style={{ backgroundColor: 'var(--bg-dark-secondary)' }}>
        <div className="container">
          <h3 style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.7rem' }}>
            More Engineering Guides
          </h3>
          <div
            className="two-col-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
              maxWidth: '900px',
              margin: '0 auto'
            }}
          >
            {relatedPosts.map((rPost) => (
              <BlogCard key={rPost.id} post={rPost} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
