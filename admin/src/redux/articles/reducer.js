import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_FAILURE,
  FETCH_ARTICLES_SUCCESS,
} from "./types";

const initialState = {
  articles: [],
  totalArticles: 0,
  loading: false,
  errors: null,
};

const articles = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_REQUEST:
      return {
        ...state,
        loading: true,
        errors: null,
        articles: [],
        totalArticles: 0,
      };

    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload.articles,
        totalArticles: action.payload.totalArticles,
      };

    default:
      return {
        ...state,
      };
  }
};

export default articles;
