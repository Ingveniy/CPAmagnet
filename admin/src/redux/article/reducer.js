import {
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_FAILURE,
  FETCH_ARTICLE_SUCCESS,
} from "./types";

const initialState = {
  article: {},
  loading: false,
  errors: null,
};

const article = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true,
        errors: null,
        article: {},
      };

    case FETCH_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        article: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default article;
