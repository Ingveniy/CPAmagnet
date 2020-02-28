import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux";

import { ApiServiceProvider } from "./components/ApiServiceContext";
import ApiService from "./service/api";
import "./index.css";
import App from "./containers/App";

const apiService = new ApiService();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ApiServiceProvider value={apiService}>
      <Router>
        <App />
      </Router>
    </ApiServiceProvider>
  </Provider>,

  document.getElementById("root"),
);
if (module.hot) module.hot.accept();
