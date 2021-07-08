import {
  GET_CONTACT_FAILURE,
  GET_CONTACT_REQUEST,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_REMOVE,
} from "./actionType";
import axios from "axios";

const getContactRequest = () => {
  return {
    type: GET_CONTACT_REQUEST,
  };
};

const getContactSuccess = (payload) => {
  return {
    type: GET_CONTACT_SUCCESS,
    payload,
  };
};

const getContactFailure = (payload) => {
  return {
    type: GET_CONTACT_FAILURE,
    payload,
  };
};

export const getContactRemove = () => {
  return {
    type: GET_CONTACT_REMOVE,
  };
};

export const getContactById = (contactId) => {
  return (dispatch) => {
    dispatch(getContactRequest());

    axios
      .get(`http://localhost:3000/people/${contactId}`)
      .then((res) => dispatch(getContactSuccess(res.data)))
      .catch((err) => dispatch(getContactFailure(err)));
  };
};
