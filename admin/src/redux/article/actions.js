import {
  getArticleRequest,
  getArticleFailure,
  getArticleSuccess,
  createArticleRequest,
  createArticleFailure,
  createArticleSuccess,
  updateArticleRequest,
  updateArticleFailure,
  updateArticleSuccess,
  removeArticleRequest,
  removeArticleFailure,
  removeArticleSuccess,
} from "./actionCreators";

const getArticle = api => id => dispatch => {
  dispatch(getArticleRequest());
  api
    .getArticle(id)
    .then(res => {
      dispatch(getArticleSuccess(res.data));
      console.log(res, "res getArticle");
    })
    .catch(err => {
      dispatch(getArticleFailure(err));
      console.log(err, "err getArticle");
    });
};

const createArticle = api => articleData => dispatch => {
  dispatch(createArticleRequest());
  api
    .createArticle(articleData)
    .then(res => {
      dispatch(createArticleSuccess(res.data));
      console.log(res, "res createArticle");
    })
    .catch(err => {
      dispatch(createArticleFailure(err));
      console.log(err, "err createArticle");
    });
};

const updateArticle = api => (id, articleData) => dispatch => {
  dispatch(updateArticleRequest());
  api
    .updateArticle(id, articleData)
    .then(res => {
      dispatch(updateArticleSuccess(res.data));
      console.log(res, "res updateArticle");
    })
    .catch(err => {
      dispatch(updateArticleFailure(err));
      console.log(err, "err updateArticle");
    });
};

const removeArticle = api => id => dispatch => {
  dispatch(removeArticleRequest());
  api
    .removeArticle(id)
    .then(res => {
      dispatch(removeArticleSuccess(res.data));
      console.log(res, "res removeArticle");
    })
    .catch(err => {
      dispatch(removeArticleFailure(err));
      console.log(err, "err removeArticle");
    });
};

export { getArticle, createArticle, updateArticle, removeArticle };
