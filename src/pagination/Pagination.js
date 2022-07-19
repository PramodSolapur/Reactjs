import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  paginate,
  prevPage,
  nextPage,
}) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav className="mt-4">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="!#" onClick={prevPage}>
            Prev
          </a>
        </li>
        {pageNumber.map((number) => (
          <li className="page-item" key={number}>
            <a className="page-link" href="!#" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" href="!#" onClick={nextPage}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
