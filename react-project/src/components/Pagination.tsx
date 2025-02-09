import React, { FunctionComponent } from 'react';
import { PaginationProps } from '../interfaces/pagination-props';

const Pagination: FunctionComponent<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="pagination">
      <button
        className="pag_btn"
        onClick={() => onPageChange(1)}
        disabled={isFirstPage}
      >
        {'<<'}
      </button>
      <button
        className="pag_btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        {'<'}
      </button>
      <span className="pag_span">{currentPage}</span>
      <button
        className="pag_btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        {'>'}
      </button>
      <button
        className="pag_btn"
        onClick={() => onPageChange(totalPages)}
        disabled={isLastPage}
      >
        {'>>'}
      </button>
    </div>
  );
};

export default Pagination;
