import axios from "axios";
import {
  LOAD_PROJECTS_SUCCESS,
  CREATE_PROJECT,
  DELETE_PROJECT,
  PROJECTS_LOADING,
} from "./actionTypes";

export function loadProjectSuccess(projects) {
  return {
    type: LOAD_PROJECTS_SUCCESS,
    projects,
  };
}

export function getProjects() {
  return function (dispatch) {
    // dispatch(setItemsLoading());
    return axios
      .get("/api/projects")
      .then((res) => {
        dispatch(loadProjectSuccess(res.data));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function createProject(project) {
  return {
    type: CREATE_PROJECT,
    project,
  };
}

export const deleteProject = (id) => {
  return {
    type: DELETE_PROJECT,
    payload: id,
  };
};

export const setItemsLoading = () => {
  return {
    type: PROJECTS_LOADING,
  };
};
