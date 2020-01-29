import { A } from "../../constants/actionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  return { type: A.CREATE_COURSE, course };
}

export function loadCourseSuccess(courses) {
  return { type: A.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}
