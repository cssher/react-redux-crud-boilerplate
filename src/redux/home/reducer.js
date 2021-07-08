import {
  FETCH_HOME_DATA_FAILURE,
  FETCH_HOME_DATA_SUCCESS,
  FETCH_HOME_DATA_REQUEST,
} from "./actionType";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

export const homeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_HOME_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_HOME_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: payload,
      };

    case FETCH_HOME_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
