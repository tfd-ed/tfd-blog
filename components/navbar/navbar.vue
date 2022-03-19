<template>
  <header class="sticky top-0 z-10 navbar bg-gray-100 mx-auto">
    <div class="flex-1">
      <nuxt-link :to="localePath('index')">
        <nuxt-img src="/tfd_logo.jpeg" class="w-8" />
      </nuxt-link>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li>
          <nuxt-link :to="localePath('index')" class="capitalize">{{
            $t("home")
          }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('blog')" class="capitalize">{{
            $t("articles")
          }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('projects')" class="capitalize">{{
            $t("projects")
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
    </div>
  </header>
</template>
<script>
import CountryFlag from "vue-country-flag";
export default {
  name: "NavBar",
  components: { CountryFlag },
};
</script>
