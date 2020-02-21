import {
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_FAILURE,
  FETCH_ARTICLE_SUCCESS,
} from "./types";

export const getArticleRequest = () => {
  return { type: FETCH_ARTICLE_REQUEST };
};
export const getArticleFailure = error => {
  return { type: FETCH_ARTICLE_FAILURE, payload: error };
};

export const getArticleSuccess = article => {
  return { type: FETCH_ARTICLE_SUCCESS, payload: article };
};
