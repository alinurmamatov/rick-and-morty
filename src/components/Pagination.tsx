import React from 'react';
import { useAllCharacters } from 'context/AllCharactersContext';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';

const Pagination = (): JSX.Element => {
  const { howManyPages, setPageNow, pageNow } = useAllCharacters();
  const pages = new Array(howManyPages).fill('page');

  return (
    <div className="pagination-wrapper">
      <button
        onClick={() => setPageNow((prev) => prev - 1)}
        disabled={pageNow === 0 ? true : false}
        className={`pagination-btn ${pageNow === 0 && 'disabled-btn'}`}>
        <SlArrowLeft />
      </button>

      {pages.map((page, index) => {
        return (
          <button
            key={`${page}${index}`}
            onClick={() => setPageNow(index)}
            className={`pagination-btn ${
              pageNow + 1 === index + 1 && 'active'
            }`}>
            {index + 1}
          </button>
        );
      })}

      <button
        onClick={() => setPageNow((prev) => prev + 1)}
        disabled={howManyPages - 1 === pageNow ? true : false}
        className={`pagination-btn ${
          howManyPages - 1 === pageNow && 'disabled-btn'
        }`}>
        <SlArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
