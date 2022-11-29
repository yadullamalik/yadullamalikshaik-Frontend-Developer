import axios from "axios";

export const GET_DATA = "GET_DATA";
export const GET_STATUS = "GET_STATUS";
export const GET_TYPE = "GET_TYPE";
export const GET_LAUNCH_YEAR = "GET_LAUNCH_YEAR";
export const CHANGE_OFFSET = "CHANGE_OFFSET";

export const getData = (offset) => (dispatch) => {
  return axios
    .get(`https://api.spacexdata.com/v3/launches?limit=10&offset=${offset}`)
    .then((r) => dispatch({ type: GET_DATA, payload: r.data }));
};
export const getStatus = (status, offset) => (dispatch) => {
  return axios
    .get(
      `https://api.spacexdata.com/v3/launches?launch_success=${status}&limit=10&offset=${offset}`
    )
    .then((r) => dispatch({ type: GET_STATUS, payload: r.data }));
};
export const getType = (type, offset) => (dispatch) => {
  return axios
    .get(
      `https://api.spacexdata.com/v3/launches?launch_success=${type}&limit=10&offset=${offset}`
    )
    .then((r) => dispatch({ type: GET_STATUS, payload: r.data }));
};
export const getLaunchYear = (year,offset) => (dispatch) => {
  return axios
    .get(
      `https://api.spacexdata.com/v3/launches?launch_year=${year}&limit=10&offset=${offset}`
    )
    .then((r) => dispatch({ type: GET_STATUS, payload: r.data }));
};

export const changeOffset = (data) => {
  return {
    type: CHANGE_OFFSET,
    payload: data,
  };
};
