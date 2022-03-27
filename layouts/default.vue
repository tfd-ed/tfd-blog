<template>
  <div class="dark:bg-gray-800 font-sans bg-white relative">
    <NavBar />
    <nuxt />
    <CookiesInfo />
    <CookiesModal />
    <Footer />
  </div>
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
      if (
        this.$cookies.get("google_analytics") === undefined ||
        this.$cookies.get("google_analytics") === true
      ) {
        this.activeGA();
      } else if (this.$cookies.get("google_analytics") === false) {
        this.disableGA();
      }
    });
  },
  methods: {
    activeGA() {
      this.$ga.enable(); // Activate module
      this.$ga.page(this.$route.path);
    },
    disableGA() {
      this.$ga.disable(); // User chose to disable
    },
  },
};
</script>
