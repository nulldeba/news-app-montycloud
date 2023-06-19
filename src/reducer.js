const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_NEWS":
      return {
        ...state,
        isLoading: false,
        news: action.payload.news,
        totalPages: action.payload.totalPages,
        totalRecord: action.payload.totalRecord,
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "NEXT_PAGE":
      let pageNum = state.page + 1;
        if (pageNum >= state.totalPages) {
          pageNum = state.totalPages;
        }
      return {
        ...state,
        page: pageNum,
      };
    case "PREV_PAGE": {
      let pageNum = state.page - 1;
      if (pageNum <= 0) {
        pageNum = 1;
      }
      return {
        ...state,
        page: pageNum,
      };
    }
    case "SET_PAGE":
      return { ...state, page: 1 };

    default: {
      return { ...state };
    }
  }
};

export default reducer;
