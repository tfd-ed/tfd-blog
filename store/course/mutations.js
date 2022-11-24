import { updateField } from "vuex-map-fields";

export default {
  SET_COURSES(state, courses) {
    state.courses = state.courses.concat(courses);
    state.coursesFetchSize = courses.length;
  },
  SET_COURSE(state, course) {
    state.course = course;
  },
  SET_COURSE_DURATION(state, { id, duration }) {
    let course = state.courses.find((item) => {
      return item.id === id;
    });
    course.duration = duration;
  },
  UPDATE_PURCHASE(state, purchase) {
    state.purchase = purchase;
  },
  CLEAR(state) {
    state.courses = [];
    state.coursesFetchSize = 0;
  },
  CLEAR_PURCHASE(state) {
    state.purchase = {};
  },
  updateField,
};
