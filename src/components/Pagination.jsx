import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showInfo = true,
  totalItems = null,
  itemsPerPage = null,
  className = ''
}) {
  if (totalPages <= 1) {
    return null; // Gracefully hide pagination when there is only one page
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Generate page numbers array
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const startItem = (currentPage - 1) * (itemsPerPage || 0) + 1;
  const endItem = Math.min(currentPage * (itemsPerPage || 0), totalItems || 0);

  return (
    <div className={`pagination-wrapper ${className}`}>
      <div className="pagination-container" role="navigation" aria-label="Pagination Navigation">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="pagination-btn"
          aria-label="Go to previous page"
        >
          <FiChevronLeft size={18} />
          <span style={{ marginLeft: '4px' }}>Prev</span>
        </button>

        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`pagination-btn ${page === currentPage ? 'active' : ''}`}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="pagination-btn"
          aria-label="Go to next page"
        >
          <span style={{ marginRight: '4px' }}>Next</span>
          <FiChevronRight size={18} />
        </button>
      </div>

      {showInfo && totalItems !== null && (
        <div className="pagination-info">
          Showing {startItem} – {endItem} of {totalItems} items
        </div>
      )}
    </div>
  );
}
