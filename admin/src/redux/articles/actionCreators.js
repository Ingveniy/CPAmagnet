import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_FAILURE,
  FETCH_ARTICLES_SUCCESS,
} from "./types";

export const getArticlesRequest = () => {
  return { type: FETCH_ARTICLES_REQUEST };
};
export const getArticlesFailure = error => {
  return { type: FETCH_ARTICLES_FAILURE, payload: error };
};

export const getArticlesSuccess = articles => {
  return { type: FETCH_ARTICLES_SUCCESS, payload: articles };
};
