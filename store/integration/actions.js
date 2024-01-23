export default {
  async fetchIntegration({ commit }, id) {
    const integrations = await this.$axios.$get(
      `v1/user-own-management/${id}/integrations`
    );
    commit("SET_INTEGRATION", integrations);
  },
};
