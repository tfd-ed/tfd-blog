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
};
