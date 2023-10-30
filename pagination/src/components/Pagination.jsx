import { PropTypes } from 'prop-types';

export const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination flex mt-4">
        {pageNumbers.map((number) => (
          <li key={number} className="">
            <a onClick={() => paginate(number)} href="!#" className={`page-link p-2 border hover:bg-cyan-100 ${number === currentPage? 'active': ''}`}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes =  {
  postsPerPage: PropTypes.number,
  totalPosts: PropTypes.number,
  paginate: PropTypes.func,
  currentPage: PropTypes.number,
}
