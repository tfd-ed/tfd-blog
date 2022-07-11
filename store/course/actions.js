export default {
  async fetchCourses(
    // eslint-disable-next-line no-unused-vars
    { dispatch, commit, getters, rootGetters },
    { page, limit }
  ) {
    const response = await this.$axios.$get(
      `/v1/course?page=${page}&limit=${limit}`
    );
    commit("SET_COURSES", response.data);
  },
  async fetchCourse(
    // eslint-disable-next-line no-unused-vars
    { dispatch, commit, getters, rootGetters },
    { id }
  ) {
    const response = await this.$axios.$get(`/v1/course/${id}`);
    commit("SET_COURSE", response);
  },
};
