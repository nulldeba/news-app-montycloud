import React, { createContext, useEffect, useReducer, useState } from "react";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import "./App.css";
import News from "./components/News";
import reducer from "./reducer";

const initialState = {
  isLoading: true,
  query: "",
  totalPages: 0,
  page: 1,
  news: [],
  totalRecord: 0,
};

export const AppContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchNewsData = async (url) => {
    try {
      const response = await fetch(url).then((data) => data.json());
      const newsData = response?.response?.results;
      dispatch({
        type: "GET_NEWS",
        payload: {
          news: newsData,
          totalPages: response?.response?.pages,
          totalRecord: response?.response?.total,
        },
      });
    } catch (err) {
      dispatch({ type: "SET_PAGE" });
    }
  };

  const searchPost = (searchQuery) => {
    dispatch({ type: "SEARCH_QUERY", payload: searchQuery });
  };

  const getNextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  };

  const getPrevPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };

  useEffect(() => {
    let searchApi = `https://content.guardianapis.com/search?api-key=test&q=${state.query}&show-fields=thumbnail,headline&show-tags=keyword&page=${state.page}&page-size=10`;

    fetchNewsData(searchApi);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, searchPost, getNextPage, getPrevPage }}
    >
      <div className="App">
        <Search />
        <News />

        <Pagination />
      </div>
    </AppContext.Provider>
  );
}

export default App;
