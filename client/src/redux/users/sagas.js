import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import "isomorphic-unfetch";

import { LOAD_DATA_REQUEST } from "./types";
import { loadDataSuccess, failure } from "./actionCreators";

function* loadDataSaga() {
  try {
    const res = yield fetch("https://jsonplaceholder.typicode.com/users");
    const data = yield res.json();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* usersRootSaga() {
  yield all([takeLatest(LOAD_DATA_REQUEST, loadDataSaga)]);
}

export default usersRootSaga;
