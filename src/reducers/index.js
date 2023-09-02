import { combineReducers } from "redux";
import courseReducer from "./CourseReducer";

const allReducers = combineReducers({
    courseReducer:courseReducer,
});

export default allReducers;