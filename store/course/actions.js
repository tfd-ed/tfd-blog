import { RequestQueryBuilder } from "@nestjsx/crud-request";
export default {
  async fetchCourses(
    // eslint-disable-next-line no-unused-vars
    { dispatch, commit, getters, rootGetters },
    { page, limit }
  ) {
    const query = RequestQueryBuilder.create({
      limit: limit,
      page: page,
      join: [
        {
          field: "category",
          select: ["name"],
        },
        {
          field: "thumbnail",
          select: ["path"],
        },
        {
          field: "chapters",
        },
      ],
      sort: [
        {
          field: "createdDate",
          order: "DESC",
        },
      ],
    });
    const response = await this.$axios.$get(`/v1/courses`, {
      params: {},
      paramsSerializer: (param) => {
        return query.query();
      },
    });
    commit("SET_COURSES", response.data);
  },
  async fetchCourse(
    // eslint-disable-next-line no-unused-vars
    { dispatch, commit, getters, rootGetters },
    { id }
  ) {
    const query = RequestQueryBuilder.create({
      join: [
        {
          field: "category",
          select: ["name", "description"],
        },
        {
          field: "thumbnail",
          select: ["path"],
        },
        {
          field: "chapters",
        },
      ],
    });
    const response = await this.$axios.$get(`/v1/courses/${id}`, {
      params: {},
      paramsSerializer: (param) => {
        return query.query();
      },
    });
    commit("SET_COURSE", response);
  },
  async fetchCoursePurchase(
    // eslint-disable-next-line no-unused-vars
    { dispatch, commit, getters, rootGetters },
    { id, userId }
  ) {
    const response = await this.$axios.$get(
      `/v1/courses/${id}/user-purchase/${userId}`
    );
    commit("UPDATE_PURCHASE", response);
  },
};
