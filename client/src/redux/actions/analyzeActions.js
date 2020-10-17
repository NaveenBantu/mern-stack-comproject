import axios from "axios";
import {
  LOAD_OSCOUNTS_SUCCESS,
} from "./actionTypes";

export function loadOSCountsSuccess(oscounts) {
  return {
    type: LOAD_OSCOUNTS_SUCCESS,
    oscounts,
  };
}

export function getOSCounts() {
  return function (dispatch) {
    // dispatch(setItemsLoading());
    return axios
      .get("/api/oscounts")
      .then((res) => {
        console.log("oscount response ", res)
        dispatch(loadOSCountsSuccess(res.data));
      })
      .catch((error) => {
        throw error;
      });
  };
}

