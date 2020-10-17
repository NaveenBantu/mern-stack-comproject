import {
  LOAD_PROJECTS_SUCCESS,
  DELETE_PROJECT,
  PROJECTS_LOADING,
  CREATE_PROJECT,
} from "../actions/actionTypes";

// const initialState = {
//     projects: [],
//     loading: false
// }

export default function (state = [], action) {
  switch (action.type) {
    case LOAD_PROJECTS_SUCCESS:
      return action.projects;
    //   return {
    //     ...state,
    //     projects: action.payload,
    //     loading: false,
    //   };
    case CREATE_PROJECT:
      return [...state, { ...action.project }];
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
      };
    case PROJECTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
