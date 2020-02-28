import { START_CLOCK, TICK_CLOCK } from "./types";

const initialState = {
  lastUpdate: 0,
  light: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_CLOCK:
      return {
        ...state,
      };

    case TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light },
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
