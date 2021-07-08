import {
  CREATE_CONTACT_REQUEST,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_FAILURE,
} from "./actionType";

import axios from "axios";

const createContactRequest = () => {
  return {
    type: CREATE_CONTACT_REQUEST,
  };
};

const createContactSuccess = (payload) => {
  return {
    type: CREATE_CONTACT_SUCCESS,
    payload,
  };
};

const createContactFailure = (payload) => {
  return {
    type: CREATE_CONTACT_FAILURE,
    payload,
  };
};

export const createNewContact = (formData) => {
  return (dispatch) => {
    dispatch(createContactRequest());
    let config = {
      method: "POST",
      url: "http://localhost:3000/people",
      headers: {
        "Content-Type": "application/json",
      },

      data: formData,
    };

    axios(config)
      .then((res) => dispatch(createContactSuccess(res)))
      .catch((err) => dispatch(createContactFailure(err)));
  };
};
