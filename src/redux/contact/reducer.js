import {
  GET_CONTACT_FAILURE,
  GET_CONTACT_REQUEST,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_REMOVE,
} from "./actionType";

const initialState = {
  isLoading: true,
  dataById: [],
  error: null,
};

export const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_CONTACT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataById: payload,
        error: null,
      };

    case GET_CONTACT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case GET_CONTACT_REMOVE:
      return {};

    default:
      return state;
  }
};
