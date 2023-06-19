import React, { useContext } from "react";
import { AppContext } from "../App";

const Search = () => {
  const { query, searchPost } = useContext(AppContext);

  return (
    <>
      <h1>News List</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="search here"
            value={query}
            onChange={(e) => {
              searchPost(e.target.value);
            }}
          />
        </div>
      </form>
    </>
  );
};

export default Search;
