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

export const getArticleRequest = () => {
  return { type: FETCH_GET_ARTICLE_REQUEST };
};
export const getArticleFailure = error => {
  return { type: FETCH_GET_ARTICLE_FAILURE, payload: error };
};
export const getArticleSuccess = article => {
  return { type: FETCH_GET_ARTICLE_SUCCESS, payload: article };
};

export const createArticleRequest = () => {
  return { type: FETCH_CREATE_ARTICLE_REQUEST };
};
export const createArticleFailure = error => {
  return { type: FETCH_CREATE_ARTICLE_FAILURE, payload: error };
};
export const createArticleSuccess = article => {
  return { type: FETCH_CREATE_ARTICLE_SUCCESS, payload: article };
};

export const updateArticleRequest = () => {
  return { type: FETCH_UPDATE_ARTICLE_REQUEST };
};
export const updateArticleFailure = error => {
  return { type: FETCH_UPDATE_ARTICLE_FAILURE, payload: error };
};
export const updateArticleSuccess = article => {
  return { type: FETCH_UPDATE_ARTICLE_SUCCESS, payload: article };
};

export const removeArticleRequest = () => {
  return { type: FETCH_REMOVE_ARTICLE_REQUEST };
};
export const removeArticleFailure = error => {
  return { type: FETCH_REMOVE_ARTICLE_FAILURE, payload: error };
};
export const removeArticleSuccess = article => {
  return { type: FETCH_REMOVE_ARTICLE_SUCCESS, payload: article };
};
