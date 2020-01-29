import { A } from "../../constants/actionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case A.CREATE_COURSE:
      return [...state, { ...action.course }];
    case A.LOAD_COURSES_SUCCESS:
      return action.course
    default:
      return state;
  }
}
