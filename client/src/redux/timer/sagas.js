import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";

import { START_CLOCK } from "./types";
import { tickClock } from "./actionCreators";

function* runClockSaga() {
  yield take(START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield delay(1000);
  }
}

function* timerRootSaga() {
  yield all([
    call(runClockSaga), // Вызываем функцию  runClockSaga
  ]);
}

export default timerRootSaga;
