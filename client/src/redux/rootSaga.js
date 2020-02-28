/* global fetch */

import { all } from "redux-saga/effects";
import es6promise from "es6-promise";

import usersRootSaga from "./users/sagas";
import timerRootSaga from "./timer/sagas";

es6promise.polyfill();

function* rootSaga() {
  yield all([timerRootSaga(), usersRootSaga()]);
}

export default rootSaga;
