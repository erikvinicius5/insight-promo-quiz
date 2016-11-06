import React from 'react';
import classNames from 'classnames';

function className(idx, selected, maxPage) {
  return classNames('lime',
    idx === selected ? 'darken-1' : 'waves-effect',
    idx > maxPage ? 'disabled lighten-4' : 'lighten-2'
  );
}

const Pagination = ({ currentPage, maxPage, handleClick }) => (
  <div className="Pagination">
    <ul className="pagination">
      {[...Array(8)].map((_, page) => {
        const disabled = page > maxPage;
        return (
          <li key={page} className={className(page, currentPage, maxPage)}>
            <a onClick={!disabled && (() => handleClick(page))}>{page + 1}</a>
          </li>
        );
      })}
    </ul>
  </div>
);

export default Pagination;

