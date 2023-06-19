import React, { useContext } from "react";
import { AppContext } from "../App";

const Pagination = () => {
  const { page, getPrevPage, getNextPage, totalPages, totalRecord } =
    useContext(AppContext);
  return (
    <>
      <div>Total pages: {totalPages}</div>
      <div>Total Records: {totalRecord}</div>
      <nav aria-label="pagination">
        <ul className="pagination">
          <li>
            <span
              aria-hidden="true"
              onClick={() => {
                getPrevPage();
              }}
            >
              «
            </span>
          </li>
          <li>
            <span aria-hidden="true">{page} </span>
          </li>

          <li>
            <span
              aria-hidden="true"
              onClick={() => {
                getNextPage();
              }}
            >
              »
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
