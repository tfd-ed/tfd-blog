import Vue from "vue";
import * as Cookies from "js-cookie";
const token = Cookies.get("");

export default ({ app }) => {
  /**
   * Use 'vue-pusher' plugin
   */
  Vue.use(require("vue-pusher"), {
    api_key: app.$config.PUSHER_API_KEY,
    options: {
      cluster: app.$config.PUSHER_API_CLUSTER,
      forceTLS: true,
      encrypted: true,
      auth: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    },
  });
};
