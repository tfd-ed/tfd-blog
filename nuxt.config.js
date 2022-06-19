import createSitemapRoutes from "./utils/createSitemap";
import { create } from "./utils/feeds";
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "TFD Blog",
    htmlAttrs: {
      lang: "kh",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css", "@/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/country-flag.js", mode: "client" },
    { src: "~/plugins/animxyz.js", mode: "client" },
    { src: "~/plugins/vue-scroll-indicator.js", mode: "client" },
    { src: "~/plugins/vee-validate.js", mode: "client" },
    { src: "~/plugins/i18n.js" },
    { src: "~/plugins/axios.js" },
  ],
  serverMiddleware: ["~/api/recaptcha"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxt/postcss8",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/moment",
    "@nuxt/image",
    "@nuxtjs/google-analytics",
    "@nuxtjs/device",
  ],
  image: {
    domains: ["tfdevs.com"],
    unsplash: {
      baseURL: "https://images.unsplash.com",
    },
  },
  publicRuntimeConfig: {
    WEB_URL: process.env.WEB_URL,
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
    "google-adsense": {
      id: process.env.GOOGLE_ADSENSE_ID,
      test: process.env.GOOGLE_ADSENSE_TEST_MODE === "true",
      analyticsUacct: process.env.GOOGLE_ADSENSE_ID,
    },
    FACEBOOK_URL: process.env.FACEBOOK_URL,
    TELEGRAM_URL: process.env.TELEGRAM_URL,
    GITHUB_URL: process.env.GITHUB_URL,
    YOUTUBE_URL: process.env.YOUTUBE_URL,
    SITE_TITLE: process.env.SITE_TITLE,
    EMAIL: process.env.EMAIL,
    YOUTUBE_CHANNEL_ID: process.env.YOUTUBE_CHANNEL_ID,
    GOOGLE_ADSENSE_SLOT: process.env.GOOGLE_ADSENSE_SLOT,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    REPO: process.env.REPO,
    REPO_ID: process.env.REPO_ID,
    REPO_CAT_ID: process.env.REPO_CAT_ID,
    baseURL: process.env.BASE_URL || "http://localhost:80",
    webURL: process.env.WEB_URL || "http://localhost:3000",
    nodeEnv: process.env.NODE_ENV || "development",
    GEETEST_ID: process.env.GEETEST_ID,
    GEETEST_KEY: process.env.GEETEST_KEY,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxt/content",
    "@nuxtjs/feed",
    "nuxt-i18n",
    "vue-social-sharing/nuxt",
    "cookie-universal-nuxt",
    "@nuxtjs/sitemap",
    "@nuxtjs/axios",
    "@nuxtjs/toast",
    "@nuxtjs/auth-next",
    [
      "nuxt-youtube-subscribe-module",
      {
        tag: "YoutubeSubscribeButton",
      },
    ],
    [
      "@nuxtjs/google-adsense",
      {
        id: process.env.GOOGLE_ADSENSE_ID,
      },
    ],
    // "cookie-universal-nuxt",
  ],
  // Feed Configuration
  feed: [
    {
      path: "/feed.xml",
      create,
      cacheTime: 1000 * 60 * 15,
      type: "rss2",
      data: ["kh/project", "xml"],
    },
  ],
  // Sitemap Config
  sitemap: {
    hostname: process.env.WEB_URL,
    gzip: true,
    routes: createSitemapRoutes,
  },
  // motion options
  moment: {
    timezone: true,
    defaultTimezone: "Asia/Phnom_Penh",
  },
  // i18n options
  i18n: {
    detectBrowserLanguage: false,
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en-US.js",
        dir: "ltr",
        moment: "en",
      },
      {
        code: "kh",
        iso: "kh-KH",
        file: "kh-KH.js",
        dir: "ltr",
        moment: "kh",
      },
    ],
    defaultLocale: "kh",
    fallbackLocale: "kh",
    // rootRedirect: "kh",
    // strategy: "prefix",
    noPrefixDefaultLocale: true,
    lazy: true,
    loadLanguagesAsync: true,
    langDir: "locales/",
    vueI18n: {
      fallbackLocale: "kh",
      messages: {
        "en-US": require("./locales/en-US"),
        "kh-KH": require("./locales/kh-KH"),
      },
    },
  },

  /**
   * Toast Config
   */
  toast: {
    className: "rounded-lg text-base mx-auto mt-24 p-4 shadow-lg",
    position: "top-center",
  },

  // Nuxt Axios
  axios: {
    proxy: true,
    baseURL: process.env.BASE_URL || "http://localhost:80",
    // proxyHeaders: false,
    credentials: true,
  },
  proxy: {
    "/v1/": {
      target: `${process.env.BASE_URL}/v1`,
      pathRewrite: { "^/v1/": "" },
    },
    "/api/": {
      target: `${process.env.WEB_URL}/api`,
    },
  },
  // Nuxt Auth Plugin
  auth: {
    redirect: {
      login: "/",
    },
    strategies: {
      local: {
        token: {
          property: "accessToken",
          required: true,
          type: "bearer",
        },
        user: {
          property: "false",
          autoFetch: false,
        },
        endpoints: {
          login: {
            url: "v1/auth/login",
            method: "post",
          },
          logout: false,
          user: { url: "v1/auth/me", method: "get" },
        },
      },
    },
  },

  // GA Setting
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
    disabled: true,
    checkDuplicatedScript: true,
    debug: {
      enabled: process.env.NODE_ENV !== "release",
      sendHitTask: true,
    },
    autoTracking: {
      screenview: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Add exception
    transpile: ["vee-validate/dist/rules"],
    html: {
      minify: {
        collapseWhitespace: true, // as @dario30186 mentioned
        removeComments: true, // 👈 add this line
      },
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
