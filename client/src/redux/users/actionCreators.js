import {
  LOAD_DATA_REQUEST,
  LOAD_DATA_FAILURE,
  LOAD_DATA_SUCCESS,
} from "./types";

export function loadData() {
  return { type: LOAD_DATA_REQUEST };
}

export function failure(error) {
  return {
    type: LOAD_DATA_FAILURE,
    error,
  };
}

export function loadDataSuccess(data) {
  return {
    type: LOAD_DATA_SUCCESS,
    data,
  };
}
