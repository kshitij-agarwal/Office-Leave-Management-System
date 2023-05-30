import axios from "axios";

import { MODIFY_DATA, MODIFY_USER, GET_EMPLOYEES, LOADING } from "./types";

const setLoading = (payload) => ({
  type: LOADING,
  payload,
});

// Get employees
export const getEmployees = () => async (dispatch) => {
  let apiEndPoint = "http://192.168.29.233:8080/api/v1/employees";
  dispatch(setLoading(true));

  try {
    const apiResponse = await axios.get(apiEndPoint);
    // console.log("apiresponse - ", apiResponse.data);

    dispatch({
      type: GET_EMPLOYEES,
      payload: apiResponse.data,
    });
  } catch (err) {
    console.log("API Error - ", err.message);
  }

  dispatch(setLoading(false));
};

export const updateEmployees = (data) => async (dispatch) => {
  let apiEndPoint = "http://192.168.29.233:8080/api/v1/employees/" + data._id;
  dispatch(setLoading(true));

  // console.log("employee data - ", data);
  // console.log("apiendpoiunt - ", apiEndPoint);

  try {
    const apiResponse = await axios.put(apiEndPoint, data);
  } catch (err) {
    console.log("API Error - ", err.message);
  }

  dispatch(setLoading(false));
};
