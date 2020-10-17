import {
  LOAD_OSCOUNTS_SUCCESS,
} from "../actions/actionTypes";

// const initialState = {
//     projects: [],
//     loading: false
// }

export default function (state = [], action) {
  switch (action.type) {
    case LOAD_OSCOUNTS_SUCCESS:
      return action.oscounts;
    //   return {
    //     ...state,
    //     projects: action.payload,
    //     loading: false,
    //   };
    default:
      return state;
  }
}
