import {
  getArticlesRequest,
  getArticlesFailure,
  getArticlesSuccess,
} from "./actionCreators";

const getArticles = api => (filter = {}) => dispatch => {
  dispatch(getArticlesRequest());
  api
    .getArticles(filter)
    .then(res => {
      console.log(res, "res getArticles");

      dispatch(
        getArticlesSuccess({
          articles: res.data,
          totalArticles: res.headers["x-total-count"],
        }),
      );
    })
    .catch(err => {
      dispatch(getArticlesFailure(err));

      console.log(err, "err getArticles");
    });
  console.log("getArticles action");
};

export { getArticles };
