import {
  getArticlesRequest,
  getArticlesFailure,
  getArticlesSuccess,
} from "./actionCreators";

const getArticles = api => (filter = {}) => dispatch => {
  console.log("getArticles action");
};

export { getArticles };
