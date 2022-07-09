<template>
  <div class="dark:bg-gray-800 font-sans bg-white relative">
    <vue-scroll-indicator color="#dc2626" background="#f3f4f6" height="4px">
    </vue-scroll-indicator>
    <!--    <NavBar />-->
    <FlexNavbar />
    <nuxt />
    <CookiesInfo />
    <CookiesModal />
    <LoginModal />
    <UserRegistrationModal v-if="isGeeTestLoaded" />
    <ForgotPasswordModal v-if="isGeeTestLoaded" />
    <Footer />
  </div>
</template>
<script>
import NavBar from "~/components/navbar/navbar";
import Footer from "~/components/footer/footer";
import { onAnalyticsReady } from "vue-analytics";
import CookiesInfo from "~/components/cookies/cookies-info";
import CookiesModal from "../components/modals/cookies-modal";
import LoginModal from "../components/modals/login-modal";
import UserRegistrationModal from "../components/modals/user-registration-modal";
import FlexNavbar from "../components/navbar/flex-navbar";
import ForgotPasswordModal from "../components/modals/forgot-password-modal";

export default {
  components: {
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
      ],
    };
  },
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
