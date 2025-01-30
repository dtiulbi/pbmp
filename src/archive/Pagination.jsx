import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const paginationNumbers = [];
  const startPage = Math.max(2, currentPage - 2);
  const endPage = Math.min(totalPages - 1, currentPage + 2);

  if (startPage > 2) {
    paginationNumbers.push("...");
  }

  for (let i = startPage; i <= endPage; i++) {
    paginationNumbers.push(i);
  }

  if (endPage < totalPages - 1) {
    paginationNumbers.push("...");
  }

  return (
    <div className="pagination">
      <button
        className="icon"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={16} strokeWidth={2} />
      </button>

      <button
        onClick={() => handlePageClick(1)}
        className={currentPage === 1 ? "active" : ""}
      >
        1
      </button>

      {paginationNumbers.map((number, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(number)}
          className={number === currentPage ? "active" : ""}
          disabled={number === "..."}>
          {number}
        </button>
      ))}

      {totalPages > 1 && (
        <button
          onClick={() => handlePageClick(totalPages)}
          className={currentPage === totalPages ? "active" : ""}
        >
          {totalPages}
        </button>
      )}

      <button
        className="icon"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={16} strokeWidth={2} />
      </button>
    </div>
  );
}

export default Pagination;
