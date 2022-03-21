<template>
  <div
    v-if="getBanner || $cookies.get('open') === 'true'"
    class="sticky bottom-0 alert shadow-lg"
  >
    <div>
      <nuxt-img src="/cookie.png" class="w-6"></nuxt-img>
      <div>
        <h3 class="font-bold">{{ $t("cookies") }}</h3>
        <div class="text-xs">{{ $t("cookies_description") }}</div>
        <a
          href="https://www.cookiesandyou.com/"
          target="_blank"
          class="font-sans text-xs text-gray-800 link"
        >
          {{ $t("learn_about_cookies") }}
        </a>
      </div>
    </div>
    <div class="flex-none">
      <button class="btn btn-sm" @click="acceptCookie">
        {{ $t("acceptAll") }}
      </button>
      <!--      <button class="btn btn-sm">{{ $t("manageCookies") }}</button>-->
    </div>
  </div>
  <div
    v-else-if="$cookies.get('open') === 'false'"
    class="sticky bottom-0 right-0"
  >
    <label for="cookie-modal" class="cursor-pointer">
      <nuxt-img src="/cookie.png" class="w-12 p-2 opacity-80"></nuxt-img
    ></label>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "CookiesInfo",
  computed: {
    ...mapGetters({
      getBanner: "setting/getBannerCookie",
    }),
  },
  methods: {
    ...mapMutations({
      changeBannerState: "setting/SET_BANNER_SETTING",
    }),
    acceptCookie() {
      document.cookie = "google_analytics=true";
      document.cookie = "site_cookies=true";
      document.cookie = "open=false";
      this.changeBannerState(false);
    },
  },
};
</script>
