import {
  FETCH_HOME_DATA_FAILURE,
  FETCH_HOME_DATA_SUCCESS,
  FETCH_HOME_DATA_REQUEST,
} from "./actionType";

import axios from "axios";

const fetchHomeDataRequest = () => {
  return { type: FETCH_HOME_DATA_REQUEST };
};

const fetchHomeDataSuccess = (payload) => {
  return {
    type: FETCH_HOME_DATA_SUCCESS,
    payload,
  };
};

const fetchHomeDataFailure = (payload) => {
  return { type: FETCH_HOME_DATA_FAILURE };
};

export const fetchAllData = () => {
  return (dispatch) => {
    dispatch(fetchHomeDataRequest);
    axios
      .get("http://localhost:3000/people")
      .then((res) => dispatch(fetchHomeDataSuccess(res.data)))
      .catch((err) => dispatch(fetchHomeDataFailure(err)));
  };
};
