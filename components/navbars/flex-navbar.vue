<template>
  <header
    class="sticky top-0 z-10 bg-gray-50 border-b border-2 border-gray-100"
  >
    <div
      class="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8"
    >
      <div class="flex items-center">
        <div class="dropdown">
          <label
            tabindex="0"
            class="btn btn-ghost btn-circle sm:mr-4 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-4 border-2 border-gray-200 shadow bg-base-100 rounded-box w-52"
          >
            <nuxt-link
              v-for="(route, index) in routes"
              :key="index"
              exact
              :to="localePath(route.path)"
              class="capitalize block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
              >{{ $t(route.label) }}</nuxt-link
            >
          </ul>
        </div>

        <nuxt-link exact :to="localePath('index')">
          <img src="/tfd_logo.jpeg" class="w-8" />
        </nuxt-link>
      </div>

      <div class="flex items-center justify-end flex-1">
        <nav
          class="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:space-x-4 lg:flex"
        >
          <nuxt-link
            v-for="(route, index) in routes"
            :key="index"
            exact
            :to="localePath(route.path)"
            class="capitalize block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
            >{{ $t(route.label) }}</nuxt-link
          >
        </nav>

        <div class="flex items-center ml-8">
          <div
            class="flex items-center border-gray-100 divide-x divide-gray-100 border-x"
          >
            <!--            <span>-->
            <!--              <nuxt-link-->
            <!--                to="/cart"-->
            <!--                class="block p-6 border-b-4 border-transparent hover:border-red-700"-->
            <!--              >-->
            <!--                <svg-->
            <!--                  class="w-4 h-4"-->
            <!--                  fill="none"-->
            <!--                  viewBox="0 0 24 24"-->
            <!--                  stroke="currentColor"-->
            <!--                  xmlns="http://www.w3.org/2000/svg"-->
            <!--                >-->
            <!--                  <path-->
            <!--                    stroke-linecap="round"-->
            <!--                    stroke-linejoin="round"-->
            <!--                    stroke-width="2"-->
            <!--                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"-->
            <!--                  />-->
            <!--                </svg>-->

            <!--                <span class="sr-only">Cart</span>-->
            <!--              </nuxt-link>-->
            <!--            </span>-->

            <span v-if="isAuth">
              <nuxt-link
                to="/user"
                class="block p-6 border-b-4 border-transparent hover:border-red-700"
              >
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span class="sr-only"> Account </span>
              </nuxt-link>
            </span>

            <!--            <span>-->
            <!--              <div-->
            <!--                class="cursor-pointer block p-6 border-b-4 border-transparent hover:border-red-700"-->
            <!--              >-->
            <!--                <svg-->
            <!--                  class="w-4 h-4"-->
            <!--                  xmlns="http://www.w3.org/2000/svg"-->
            <!--                  fill="none"-->
            <!--                  viewBox="0 0 24 24"-->
            <!--                  stroke="currentColor"-->
            <!--                >-->
            <!--                  <path-->
            <!--                    stroke-linecap="round"-->
            <!--                    stroke-linejoin="round"-->
            <!--                    stroke-width="2"-->
            <!--                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"-->
            <!--                  />-->
            <!--                </svg>-->

            <!--                <span class="sr-only"> Search </span>-->
            <!--              </div>-->
            <!--            </span>-->
            <span class="p-2 flex space-x-4 items-center">
              <nuxt-link
                v-if="$i18n.locale === 'en'"
                class="border-b-4 border-transparent hover:text-red-700 hover:border-current"
                :to="switchLocalePath('km')"
              >
                <CountryFlag country="kh" size="normal" />
              </nuxt-link>
              <nuxt-link
                v-if="$i18n.locale === 'km'"
                class="border-b-4 border-transparent hover:text-red-700 hover:border-current"
                :to="switchLocalePath('en')"
              >
                <CountryFlag country="gb" size="normal" />
              </nuxt-link>
              <label v-if="!isAuth" for="login-modal">
                <ShadowButton text="login" color="bg-red-600"></ShadowButton>
              </label>
              <ShadowButton
                v-if="isAuth"
                text="logout"
                color="bg-gray-700"
                @onClick="logout"
              ></ShadowButton>
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { routes } from "static/js/routes";
import { mapGetters } from "vuex";
import ShadowButton from "../buttons/shadow-button";

export default {
  components: { ShadowButton },
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
