export default ({ app, store, $axios, redirect }) => {
  $axios.onRequest((config) => {
    config.headers.common["Accept-Language"] = app.i18n.locale;
    // console.log(app.$auth.$storage.getState("_token.local"));
  });
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);

    if (code === 400) {
      const prefer = store.getters["setting/getLoginType"];
      const previousRegistration =
        error.response.data.integration[0].provider.toLowerCase();
      const name = error.response.data.user.firstname;
      const email = error.response.data.user.email;
      setTimeout(() => {
        app.router.push(
          app.localePath(
            `/integration?previous=${previousRegistration}&prefer=${prefer}&name=${name}&email=${email}`
          )
        );
      });
    }
    // console.log(prefer);
    // console.log(code);
    // console.log(originalRequest.url);
    // console.log(redirect);
    // console.log(previousRegistration);
    // console.log(app);
  });
  /**
   * Refresh Token Upon Error
   */
  // $axios.onError((error) => {
  //   console.log("Request Error Occurred!");
  //   const code = parseInt(error.response && error.response.status);
  //
  //   let originalRequest = error.config;
  //   console.log(code);
  //   console.log(originalRequest.url);
  //   if (originalRequest.url !== "v1/auth/login") {
  //     // console.log("True");
  //     if (!app.$auth.strategy.token.get()) {
  //       if ([403, 401].includes(code)) {
  //         /**
  //          * Retrieve and set access and refresh token from universal storage as they are become 'false'
  //          */
  //         app.$auth.strategy.token.set(
  //           app.$auth.$storage.getUniversal("access")
  //         );
  //         app.$auth.strategy.refreshToken.set(
  //           app.$auth.$storage.getUniversal("refresh")
  //         );
  //         return new Promise((resolve, reject) => {
  //           app.$auth.refreshTokens().then((response) => {
  //             // console.log(response.status);
  //             if (response.status === 200) {
  //               /**
  //                * Update both tokens in universal storage
  //                */
  //               app.$auth.$storage.setUniversal(
  //                 "access",
  //                 `Bearer ${response.data.accessToken}`
  //               );
  //               app.$auth.$storage.setUniversal(
  //                 "refresh",
  //                 response.data.refreshToken
  //               );
  //             }
  //             resolve(response);
  //           });
  //         })
  //           .then((res) => {
  //             return $axios(originalRequest);
  //           })
  //           .catch((e) => {
  //             app.$auth.logout();
  //
  //             setTimeout(() => {
  //               app.router.push("/");
  //             });
  //           });
  //       }
  //     }
  //   }
  // });
};
