import {
  LOAD_DATA_REQUEST,
  LOAD_DATA_FAILURE,
  LOAD_DATA_SUCCESS,
} from "./types";

const initialState = {
  placeholderData: null,
  error: false,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA_REQUEST:
      return {
        ...state,
        ...{ loading: true, error: false },
      };

    case LOAD_DATA_FAILURE:
      return {
        ...state,
        ...{ loading: false, error: action.error },
      };
    case LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ loading: false, placeholderData: action.data },
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
