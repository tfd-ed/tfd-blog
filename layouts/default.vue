<template>
  <main class="dark:bg-gray-800 font-sans bg-white relative">
    <NavBar />
    <nuxt />
    <CookieControl :locale="$i18n.locale">
      <template v-slot:modal>
        <h3 class="font-sans text-lg">{{ $t("cookies") }}</h3>
      </template>
      <template v-slot:bar>
        <div class="flex flex-col space-y-4">
          <h3 class="font-sans text-lg">{{ $t("cookies") }}</h3>
          <p class="font-sans">
            {{ $t("cookies_description") }}
          </p>
        </div>
      </template>
      <template v-slot:cookie="{ config }">
        <span v-for="c in config" :key="c.id" v-text="c.cookies" />
      </template>
    </CookieControl>
    <Footer />
  </main>
</template>
<script>
import NavBar from "~/components/navbar/navbar";
import Footer from "~/components/footer/footer";
export default {
  components: { Footer, NavBar },
};
</script>
