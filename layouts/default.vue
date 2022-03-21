<template>
  <main class="dark:bg-gray-800 font-sans bg-white relative">
    <NavBar />
    <nuxt />
    <!--    <CookieControl :locale="$i18n.locale">-->
    <!--      &lt;!&ndash;      <template v-slot:modal>&ndash;&gt;-->
    <!--      &lt;!&ndash;        <h3 class="font-sans text-lg">{{ $t("cookies") }}</h3>&ndash;&gt;-->
    <!--      &lt;!&ndash;      </template>&ndash;&gt;-->
    <!--      <template #bar>-->
    <!--        <div class="flex flex-col space-y-4">-->
    <!--          <div class="flex space-x-5">-->
    <!--            <nuxt-img src="/cookie.png" class="h-6"></nuxt-img>-->
    <!--            <h3 class="font-sans text-lg">{{ $t("cookies") }}</h3>-->
    <!--          </div>-->
    <!--          <p class="font-sans">-->
    <!--            {{ $t("cookies_description") }}-->
    <!--          </p>-->
    <!--          <a-->
    <!--            href="https://www.cookiesandyou.com/"-->
    <!--            target="_blank"-->
    <!--            class="font-sans text-gray-300 link"-->
    <!--          >-->
    <!--            {{ $t("learn_about_cookies") }}-->
    <!--          </a>-->
    <!--        </div>-->
    <!--      </template>-->
    <!--      &lt;!&ndash;      <template v-slot:cookie="{ config }">&ndash;&gt;-->
    <!--      &lt;!&ndash;        <span v-for="c in config" :key="c.id" v-text="c.cookies" />&ndash;&gt;-->
    <!--      &lt;!&ndash;      </template>&ndash;&gt;-->
    <!--    </CookieControl>-->
    <CookiesInfo />
    <CookiesModal />
    <Footer />
  </main>
</template>
<script>
import NavBar from "~/components/navbar/navbar";
import Footer from "~/components/footer/footer";
import { onAnalyticsReady } from "vue-analytics";
import CookiesInfo from "@/components/cookies/cookies-info";
import CookiesModal from "@/components/modal/cookies-modal";
export default {
  components: { CookiesModal, CookiesInfo, Footer, NavBar },
  mounted() {
    onAnalyticsReady().then(() => {
      this.activeGA();
    });
  },
  methods: {
    activeGA() {
      this.$ga.enable(); // Activate module
      this.$ga.page(this.$route.path);
    },
  },
};
</script>
