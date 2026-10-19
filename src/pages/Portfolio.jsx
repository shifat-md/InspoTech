import React, { useState } from 'react';
import { FiSearch, FiLayers } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import PortfolioCard from '../components/PortfolioCard';
import Pagination from '../components/Pagination';
import Button from '../components/Button';
import { portfolioData, portfolioCategories } from '../data/portfolioData';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter projects by category and search query
  const filteredProjects = portfolioData.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesQuery =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesQuery;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page
  };

  return (
    <div className="portfolio-page">
      {/* =========================================================
          PORTFOLIO HERO
          ========================================================= */}
      <section className="section-hero">
        <div className="bg-glow-orb bg-glow-purple" style={{ top: '-100px', right: '-150px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="badge-pill">Demonstration Case Studies</span>
          <h1 style={{ maxWidth: '850px', margin: '0 auto 1.5rem', lineHeight: '1.2' }}>
            Production Engineering Portfolio
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto 2.5rem', fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
            Explore representative software platforms, high-speed headless stores, and data telemetry tools engineered by our senior developers.
          </p>

          {/* Search Bar */}
          <div style={{ maxWidth: '500px', margin: '0 auto 2.5rem', position: 'relative' }}>
            <FiSearch
              size={18}
              style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
            />
            <input
              type="text"
              placeholder="Search by technology (React, Node, Redis) or keyword..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="form-control"
              style={{ paddingLeft: '46px', borderRadius: 'var(--radius-full)' }}
              aria-label="Search portfolio projects"
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
            {portfolioCategories.map((cat) => (
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
          PORTFOLIO GALLERY GRID
          ========================================================= */}
      <section className="section" style={{ backgroundColor: 'var(--bg-dark-secondary)' }}>
        <div className="container">
          <SectionHeading
            badge="Selected Works"
            title={`${selectedCategory} Projects`}
            subtitle={`Showing ${filteredProjects.length} projects matching your criteria.`}
            align="center"
          />

          {currentProjects.length > 0 ? (
            <>
              <div
                className="three-col-grid portfolio-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '2rem'
                }}
              >
                {currentProjects.map((project) => (
                  <PortfolioCard key={project.id} project={project} />
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
                totalItems={filteredProjects.length}
                itemsPerPage={itemsPerPage}
                showInfo={true}
              />
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
              <FiLayers size={48} color="var(--color-purple)" style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <h3 style={{ marginBottom: '0.75rem' }}>No projects match your filter</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Try selecting "All" or clear your search term to see our full portfolio.
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
