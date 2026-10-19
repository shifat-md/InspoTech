import React, { useState } from 'react';
import { FiSearch, FiBookOpen } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import BlogCard from '../components/BlogCard';
import Pagination from '../components/Pagination';
import Button from '../components/Button';
import { blogData, blogCategories } from '../data/blogData';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // 3 per page to showcase pagination with 6 articles

  const filteredPosts = blogData.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesQuery =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + itemsPerPage);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="blog-page">
      {/* =========================================================
          BLOG HERO
          ========================================================= */}
      <section className="section-hero">
        <div className="bg-glow-orb bg-glow-purple" style={{ top: '-100px', left: '-150px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="badge-pill">Technical Insights</span>
          <h1 style={{ maxWidth: '850px', margin: '0 auto 1.5rem', lineHeight: '1.2' }}>
            Full-Stack Engineering &amp; Architecture Blog
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto 2.5rem', fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            Practical guides, performance benchmarks, and architectural strategies written directly by our senior developers.
          </p>

          {/* Search Box */}
          <div style={{ maxWidth: '500px', margin: '0 auto 2.5rem', position: 'relative' }}>
            <FiSearch
              size={18}
              style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
            />
            <input
              type="text"
              placeholder="Search articles by topic, author, or keyword..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="form-control"
              style={{ paddingLeft: '46px', borderRadius: 'var(--radius-full)' }}
              aria-label="Search blog articles"
            />
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.65rem',
              flexWrap: 'wrap'
            }}
          >
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`btn btn-sm ${selectedCategory === cat ? 'btn-primary' : 'btn-outline'}`}
                style={{ borderRadius: 'var(--radius-full)', padding: '0.45rem 1.25rem' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BLOG GRID & PAGINATION
          ========================================================= */}
      <section className="section" style={{ backgroundColor: 'var(--bg-dark-secondary)' }}>
        <div className="container">
          <SectionHeading
            badge="Articles"
            title={`${selectedCategory} Publications`}
            subtitle={`Showing ${filteredPosts.length} technical guides.`}
            align="center"
          />

          {currentPosts.length > 0 ? (
            <>
              <div
                className="three-col-grid blog-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '2rem'
                }}
              >
                {currentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
                totalItems={filteredPosts.length}
                itemsPerPage={itemsPerPage}
                showInfo={true}
              />
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
              <FiBookOpen size={48} color="var(--color-purple)" style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <h3 style={{ marginBottom: '0.75rem' }}>No articles match your query</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Try searching for another keyword or reset the category filters.
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                variant="primary"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
