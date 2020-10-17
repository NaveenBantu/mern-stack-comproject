import { combineReducers } from "redux";
import projects from "./projectReducer";
import oscounts from "./analyzeReducer";

const rootReducer = combineReducers({
  projects,
  oscounts
});

export default rootReducer;
