import {
  FETCH_GET_ARTICLE_REQUEST,
  FETCH_GET_ARTICLE_FAILURE,
  FETCH_GET_ARTICLE_SUCCESS,
  FETCH_CREATE_ARTICLE_REQUEST,
  FETCH_CREATE_ARTICLE_FAILURE,
  FETCH_CREATE_ARTICLE_SUCCESS,
  FETCH_UPDATE_ARTICLE_REQUEST,
  FETCH_UPDATE_ARTICLE_FAILURE,
  FETCH_UPDATE_ARTICLE_SUCCESS,
  FETCH_REMOVE_ARTICLE_REQUEST,
  FETCH_REMOVE_ARTICLE_FAILURE,
  FETCH_REMOVE_ARTICLE_SUCCESS,
} from "./types";

const initialState = {
  article: {},
  loading: false,
  errors: null,
};

const article = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GET_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true,
        errors: null,
        article: {},
      };

    case FETCH_GET_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case FETCH_GET_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        article: action.payload,
      };

    case FETCH_CREATE_ARTICLE_REQUEST:
    case FETCH_UPDATE_ARTICLE_REQUEST:
    case FETCH_REMOVE_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true,
        errors: null,
      };

    case FETCH_CREATE_ARTICLE_FAILURE:
    case FETCH_UPDATE_ARTICLE_FAILURE:
    case FETCH_REMOVE_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case FETCH_CREATE_ARTICLE_SUCCESS:
    case FETCH_UPDATE_ARTICLE_SUCCESS:
    case FETCH_REMOVE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        article: {},
      };

    default:
      return {
        ...state,
      };
  }
};

export default article;
