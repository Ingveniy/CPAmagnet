import axios from "axios";

export default class API {
  constructor(props) {
    this.api = axios.create({
      baseURL: "http://127.0.0.1:4000/api/v1",
      responseType: "json",
    });

    this.api.interceptors.response.use(
      response => response,
      error => {
        return Promise.reject(error);
      },
    );
  }

  // Articles
  getArticles = async filter => {
    let formattedFilter = {
      query: {
        title: filter.title ? `$regex":"^(${filter.title})` : null,
      },
      limit: filter.limit || 0,
      populate: "category",
    };

    return await this.api.get("/articles", {
      params: { ...formattedFilter },
    });
  };
  // Article
  getArticle = async id => {
    return await this.api.get(`/articles/${id}`);
  };

  createArticle = async articleData => {
    return await this.api.post(`/articles`, {
      body: {
        ...articleData,
      },
    });
  };

  updateArticle = async (id, articleData) => {
    return await this.api.patch(`/articles/${id}`, {
      body: {
        ...articleData,
      },
    });
  };

  removeArticle = async id => {
    return await this.api.delete(`/articles/${id}`);
  };
}
