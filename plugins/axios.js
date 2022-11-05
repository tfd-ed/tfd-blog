export default ({ app, store, $axios }) => {
  $axios.onRequest((config) => {
    config.headers.common["Accept-Language"] = app.i18n.locale;
  });
};
