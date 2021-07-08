import {
  CREATE_CONTACT_REQUEST,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_FAILURE,
} from "./actionType";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

export const createContactReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case CREATE_CONTACT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };

    case CREATE_CONTACT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
