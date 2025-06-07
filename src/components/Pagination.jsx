import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div style={{ margin: "20px 0" }}>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            margin: "0 5px",
            backgroundColor: page === currentPage ? "black" : "white",
            color: page === currentPage ? "white" : "black",
            padding: "5px 10px",
            border: "1px solid black",
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
