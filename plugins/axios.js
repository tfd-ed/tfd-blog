export default ({ app, store, $axios, redirect }) => {
  $axios.onRequest((config) => {
    config.headers.common["Accept-Language"] = app.i18n.locale;
    // console.log(app.$auth.$storage.getState("_token.local"));
  });
  /**
   * Refresh Token Upon Error
   */
  // $axios.onError(async (error) => {
  //   console.log("Request Error Occurred!");
  //   const code = parseInt(error.response && error.response.status);
  //
  //   let originalRequest = error.config;
  //   console.log(code);
  //   if ([401, 403].includes(code)) {
  //     // originalRequest.__isRetryRequest = true;
  //
  //     // let refresh_token = app.$auth.strategy.token.get();
  //     // console.log(refresh_token);
  //
  //     return new Promise((resolve, reject) => {
  //       app.$auth.refreshTokens().then((response) => {
  //         resolve(response);
  //       });
  //       // $axios.$get(`v1/auth/refresh`).then((response) => {
  //       //   console.log(response.data);
  //       //   if (response.status === 200) {
  //       //     app.$auth.strategy.token.set(response.data.accessToken);
  //       //     // app.$auth.strategy.token.sync();
  //       //     app.$auth.strategy.refreshToken.set(response.data.refreshToken);
  //       //     // app.$auth.strategy.refreshToken.sync();
  //       //     // app.$auth.ctx.app.$axios.setHeader(
  //       //     //   "Authorization",
  //       //     //   "Bearer " + response.data.access_token
  //       //     // );
  //       //     // app.$auth.setRefreshToken(
  //       //     //   app.$auth.$storage.state.strategy,
  //       //     //   "Bearer " + response.data.refresh_token
  //       //     // );
  //       //     originalRequest.headers[
  //       //       "Authorization"
  //       //     ] = `Bearer ${response.data.accessToken}`;
  //       //   }
  //       //   resolve(response);
  //       // });
  //     })
  //       .then((res) => {
  //         return $axios(originalRequest);
  //       })
  //       .catch((e) => {
  //         app.$auth.logout();
  //
  //         setTimeout(() => {
  //           app.router.push("/");
  //         });
  //       });
  //   }
  // });
};
