import {
  EDIT_CONTACT_REQUEST,
  EDIT_CONTACT_SUCCESS,
  EDIT_CONTACT_FAILURE,
} from "./actionType";

import axios from "axios";

const editContactRequest = () => {
  return {
    type: EDIT_CONTACT_REQUEST,
  };
};

const editContactSuccess = (payload) => {
  return {
    type: EDIT_CONTACT_SUCCESS,
    payload,
  };
};

const editContactFailure = (payload) => {
  return {
    type: EDIT_CONTACT_FAILURE,
    payload,
  };
};

export const editContact = (formData, ContactId) => {
  return (dispatch) => {
    dispatch(editContactRequest());
    let config = {
      method: "PUT",
      url: `http://localhost:3000/people/${ContactId}`,
      headers: {
        "Content-Type": "application/json",
      },

      data: formData,
    };

    axios(config)
      .then((res) => dispatch(editContactSuccess(res)))
      .catch((err) => dispatch(editContactFailure(err)));
  };
};
