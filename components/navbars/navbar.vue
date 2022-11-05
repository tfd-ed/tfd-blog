<template>
  <header class="sticky top-0 z-10 navbar bg-gray-100 mx-auto">
    <div class="flex-1">
      <nuxt-link :to="localePath('index')">
        <img src="/tfd_logo.jpeg" class="w-8" />
      </nuxt-link>
    </div>
    <div class="flex-none">
      <ul v-if="!$device.isMobile" class="menu menu-horizontal p-0">
        <li v-for="(route, index) in routes" :key="index">
          <nuxt-link :to="localePath(route.path)" class="capitalize">{{
            $t(route.label)
          }}</nuxt-link>
        </li>
        <li>
          <nuxt-link
            v-if="$i18n.locale === 'en'"
            class="cursor-pointer -mt-2"
            :to="switchLocalePath('kh')"
          >
            <CountryFlag country="kh" size="normal" />
          </nuxt-link>
          <nuxt-link
            v-if="$i18n.locale === 'kh'"
            class="cursor-pointer capitalize -mt-2"
            :to="switchLocalePath('en')"
          >
            <CountryFlag country="gb" size="normal" class="-mt-2" />
          </nuxt-link>
        </li>
      </ul>
      <div v-else class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </label>
        <ul
          tabindex="0"
          class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li v-for="(route, index) in routes" :key="index">
            <nuxt-link :to="localePath(route.path)" class="capitalize">{{
              $t(route.label)
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link
              v-if="$i18n.locale === 'en'"
              class="justify-between"
              :to="switchLocalePath('kh')"
            >
              {{ $t("language") }}
              <CountryFlag country="kh" size="normal" class="-mt-2" />
            </nuxt-link>
            <nuxt-link
              v-if="$i18n.locale === 'kh'"
              class="capitalize justify-between"
              :to="switchLocalePath('en')"
            >
              {{ $t("language") }}
              <CountryFlag country="gb" size="normal" class="-mt-2" />
            </nuxt-link>
          </li>
        </ul>
      </div>
      <label v-if="!isAuth" for="login-modal">
        <ShadowButton text="login" color="bg-red-600"></ShadowButton>
      </label>
      <ShadowButton
        v-if="isAuth"
        text="logout"
        color="bg-gray-700"
        @onClick="logout"
      ></ShadowButton>
    </div>
  </header>
</template>
<script>
import CountryFlag from "vue-country-flag";
import ShadowButton from "../buttons/shadow-button";
import { routes } from "static/js/routes";
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  components: { ShadowButton, CountryFlag },
  data() {
    return {
      routes: routes,
    };
  },
  computed: {
    ...mapGetters({
      isAuth: "isAuthenticated",
      getLoggedUser: "loggedInUser",
    }),
  },
  methods: {
    async logout() {
      window.localStorage.clear();
      await this.$auth.logout();
    },
  },
};
</script>
