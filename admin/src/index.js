import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
if (module.hot) module.hot.accept();
