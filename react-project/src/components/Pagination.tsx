import React, { FunctionComponent } from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: FunctionComponent<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  return (
    <div className="pagination">
      <button className="pag_btn" onClick={() => onPageChange(1)}>
        {'<<'}
      </button>
      <button className="pag_btn" onClick={() => onPageChange(currentPage - 1)}>
        {'<'}
      </button>
      <span className="pag_span">{currentPage}</span>
      <button className="pag_btn" onClick={() => onPageChange(currentPage + 1)}>
        {'>'}
      </button>
      <button className="pag_btn" onClick={() => onPageChange(totalPages)}>
        {'>>'}
      </button>
    </div>
  );
};

export default Pagination;
