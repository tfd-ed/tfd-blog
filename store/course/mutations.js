import { updateField } from "vuex-map-fields";

export default {
  SET_COURSES(state, courses) {
    state.courses = state.courses.concat(courses);
    state.coursesFetchSize = courses.length;
  },
  SET_COURSE(state, course) {
    state.course = course;
  },
  updateField,
};
