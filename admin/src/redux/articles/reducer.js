import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_FAILURE,
  FETCH_ARTICLES_SUCCESS,
} from "./types";

const initialState = {
  articles: [],
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
        articles: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default articles;
