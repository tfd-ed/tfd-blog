<template>
  <div class="mt-6">
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <div class="w-full border-t border-gray-300"></div>
      </div>
      <div class="relative flex justify-center text-sm">
        <span class="px-2 bg-gray-100 text-gray-500">
          {{ $t("or_sign_in_with") }}
        </span>
      </div>
    </div>

    <div class="mt-6 grid grid-cols-3 gap-3">
      <div>
        <button
          class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          @click="facebookLogin"
        >
          <img
            class="h-6 w-6"
            src="https://www.svgrepo.com/show/448224/facebook.svg"
            alt=""
          />
        </button>
      </div>
      <div>
        <button
          class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          @click="githubLogin"
        >
          <img
            class="h-6 w-6"
            src="https://www.svgrepo.com/show/512317/github-142.svg"
            alt=""
          />
        </button>
      </div>
      <div>
        <button
          class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          @click="googleLogin"
        >
          <img
            class="h-6 w-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      setLoginType: "setting/SET_LOGIN_TYPE",
    }),
    googleLogin() {
      this.setLoginType("google");
      this.$auth.loginWith("google", {
        params: { prompt: "select_account" },
      });
    },
    githubLogin() {
      this.setLoginType("github");
      this.$auth.loginWith("github");
    },
    facebookLogin() {
      this.setLoginType("facebook");
      this.$auth.loginWith("facebook");
    },
  },
};
</script>
