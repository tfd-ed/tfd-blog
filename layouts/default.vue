<template>
  <div
    class="dark:bg-gray-800 font-sans bg-white relative flex flex-col h-screen"
  >
    <client-only>
      <vue-scroll-indicator color="#dc2626" background="#f3f4f6" height="4px">
      </vue-scroll-indicator>
    </client-only>
    <!--    <NavBar />-->
    <FlexNavbar />
    <nuxt class="flex-grow" />
    <CookiesInfo />
    <CookiesModal />
    <LoginModal />
    <PurchaseModal />
    <UserRegistrationModal v-if="isGeeTestLoaded" />
    <ForgotPasswordModal v-if="isGeeTestLoaded" />
    <Footer />
  </div>
</template>
<script>
import NavBar from "~/components/navbars/navbar";
import Footer from "~/components/footers/footer";
// import { onAnalyticsReady } from "vue-analytics";
import CookiesInfo from "~/components/cookies/cookies-info";
import CookiesModal from "../components/modals/cookies-modal";
import LoginModal from "../components/modals/login-modal";
import UserRegistrationModal from "../components/modals/user-registration-modal";
import FlexNavbar from "../components/navbars/flex-navbar";
import ForgotPasswordModal from "../components/modals/forgot-password-modal";
import PurchaseModal from "../components/modals/purchase-modal";

export default {
  components: {
    PurchaseModal,
    ForgotPasswordModal,
    FlexNavbar,
    UserRegistrationModal,
    LoginModal,
    CookiesModal,
    CookiesInfo,
    Footer,
    NavBar,
  },
  data() {
    return {
      isGeeTestLoaded: false,
    };
  },
  head() {
    return {
      script: [
        {
          hid: "geetest",
          src: "https://static.geetest.com/v4/gt4.js",
          defer: true,
          // Changed after script load
          callback: () => {
            this.isGeeTestLoaded = true;
          },
        },
        {
          src: "https://plausible.io/js/script.js",
          defer: true,
          "data-domain": "tfdevs.com",
        },
      ],
    };
  },
  // mounted() {
  //   onAnalyticsReady().then(() => {
  //     if (
  //       this.$cookies.get("google_analytics") === undefined ||
  //       this.$cookies.get("google_analytics") === true
  //     ) {
  //       this.activeGA();
  //     } else if (this.$cookies.get("google_analytics") === false) {
  //       this.disableGA();
  //     }
  //   });
  // },
  // methods: {
  //   activeGA() {
  //     this.$ga.enable(); // Activate module
  //     this.$ga.page(this.$route.path);
  //   },
  //   disableGA() {
  //     this.$ga.disable(); // User chose to disable
  //   },
  // },
};
</script>
