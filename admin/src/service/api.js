import axios from "axios";

export default class API {
  constructor(props) {
    this.api = axios.create({
      baseURL: "http://192.168.30.75:4000/api/v1",
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
    return await this.api.get("/articles");
  };
  // Article
}
