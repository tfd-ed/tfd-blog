<template>
  <ModalTemplate id="cookie-modal">
    <template #content>
      <label
        for="cookie-modal"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <div class="flex space-x-4">
        <img src="/cookie.png" class="h-6" />
        <h3 class="text-lg font-bold">
          {{ $t("cookies") }}
        </h3>
      </div>
      <p class="py-4 leading-loose text-sm">
        {{ $t("cookies_description") }}
      </p>
      <!--      <h4 class="text-md font-bold">-->
      <!--        {{ $t("necessary") }}-->
      <!--      </h4>-->
      <!--        <div class="flex items-center space-x-4">-->
      <!--          <input type="checkbox" class="checkbox" disabled checked />-->
      <!--          <p class="py-4 leading-loose text-sm">-->
      <!--            {{ $t("cookies_control") }}-->
      <!--          </p>-->
      <!--        </div>-->

      <!--      <div class="flex items-center space-x-4 items-center">-->
      <!--        <img src="/ga_logo.svg" class="w-28">-->
      <!--        <p class="py-4 leading-loose text-sm">-->
      <!--          {{ $t("ga_description") }}-->
      <!--        </p>-->
      <!--      </div>-->
      <div class="flex flex-row space-x-2 justify-center">
        <label for="cookie-modal" @click="acceptAll">
          <ShadowButton text="acceptAll" color="bg-green-600" />
        </label>
        <label for="cookie-modal" @click="deleteAll">
          <ShadowButton
            text="declineAll"
            color="bg-red-600"
            on-click="declineAll"
          />
        </label>
      </div>
      <!--      <div class="btn-group justify-center space-x-1">-->
      <!--        <label-->
      <!--          for="cookie-modal"-->
      <!--          class="btn btn-success text-white text-xs lg:text-lg"-->
      <!--          @click="acceptAll"-->
      <!--        >-->
      <!--          {{ $t("acceptAll") }}-->
      <!--        </label>-->
      <!--        <label-->
      <!--          for="cookie-modal"-->
      <!--          class="btn btn-error text-white text-xs lg:text-lg"-->
      <!--          @click="deleteAll"-->
      <!--        >-->
      <!--          {{ $t("declineAll") }}-->
      <!--        </label>-->
      <!--      </div>-->
    </template>
  </ModalTemplate>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import ModalTemplate from "./modal-template";
import ShadowButton from "~/components/buttons/shadow-button";

export default {
  components: { ShadowButton, ModalTemplate },
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
      // this.$ga.enable();
      // this.$ga.page(this.$route.path);
    },
    deleteAll() {
      this.$cookies.set("google_analytics", false);
      this.$cookies.set("accept_cookies", false);
      // this.$ga.disable();
    },
  },
};
</script>
