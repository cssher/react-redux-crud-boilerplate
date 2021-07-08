import {
  EDIT_CONTACT_REQUEST,
  EDIT_CONTACT_SUCCESS,
  EDIT_CONTACT_FAILURE,
} from "./actionType";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

export const editContactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case EDIT_CONTACT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case EDIT_CONTACT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };

    case EDIT_CONTACT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
