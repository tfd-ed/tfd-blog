<template>
  <div>
    <input id="cookie-modal" type="checkbox" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label
          for="cookie-modal"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <div class="flex space-x-4">
          <nuxt-img src="/cookie.png" class="h-6"></nuxt-img>
          <h3 class="text-lg font-bold">
            {{ $t("cookies") }}
          </h3>
        </div>
        <p class="py-4 leading-loose text-sm">
          {{ $t("cookies_description") }}
        </p>
        <h4 class="text-md font-bold">
          {{ $t("necessary") }}
        </h4>
        <!--        <div class="flex items-center space-x-4">-->
        <!--          <input type="checkbox" class="checkbox" disabled checked />-->
        <!--          <p class="py-4 leading-loose text-sm">-->
        <!--            {{ $t("cookies_control") }}-->
        <!--          </p>-->
        <!--        </div>-->

        <div class="flex items-center space-x-4 items-center">
          <nuxt-img src="/ga_logo.svg" class="w-28"></nuxt-img>
          <p class="py-4 leading-loose text-sm">
            {{ $t("ga_description") }}
          </p>
        </div>
        <div class="btn-group justify-center space-x-1">
          <label
            for="cookie-modal"
            class="btn btn-success text-white text-xs lg:text-lg"
            @click="acceptAll"
          >
            {{ $t("acceptAll") }}
          </label>
          <label
            for="cookie-modal"
            class="btn btn-error text-white text-xs lg:text-lg"
            @click="deleteAll"
          >
            {{ $t("declineAll") }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      bannerStatus: "setting/getBannerCookie",
    }),
  },
  methods: {
    ...mapMutations({
      toggleBanner: "setting/SET_BANNER_SETTING",
    }),
    acceptAll() {
      this.$cookies.set("google_analytics", true);
      this.$cookies.set("accept_cookies", true);
      this.$ga.enable();
      this.$ga.page(this.$route.path);
    },
    deleteAll() {
      this.$cookies.set("google_analytics", false);
      this.$cookies.set("accept_cookies", false);
      this.$ga.disable();
    },
  },
};
</script>
