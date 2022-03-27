import createSitemapRoutes from "./utils/createSitemap";
import { create } from "./utils/feeds";
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

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
    link: [{ rel: "icon", type: "image/x-icon", href: "/tfd_logo.jpeg" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css", "@/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/country-flag.js", mode: "client" },
    { src: "~/plugins/animxyz.js", mode: "client" },
    { src: "~/plugins/vue-infinite-loading.js", mode: "client" },
  ],

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
    FACEBOOK_URL: process.env.FACEBOOK_URL,
    TELEGRAM_URL: process.env.TELEGRAM_URL,
    GITHUB_URL: process.env.GITHUB_URL,
    YOUTUBE_URL: process.env.YOUTUBE_URL,
    SITE_TITLE: process.env.SITE_TITLE,
    EMAIL: process.env.EMAIL,
    YOUTUBE_CHANNEL_ID: process.env.YOUTUBE_CHANNEL_ID,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxt/content",
    "@nuxtjs/feed",
    "nuxt-i18n",
    "vue-social-sharing/nuxt",
    "cookie-universal-nuxt",
    "@nuxtjs/sitemap",
    [
      "nuxt-youtube-subscribe-module",
      {
        tag: "YoutubeSubscribeButton",
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
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en-US.json",
        dir: "ltr",
        moment: "en",
      },
      {
        code: "kh",
        iso: "kh-KH",
        file: "kh-KH.json",
        dir: "ltr",
        moment: "kh",
      },
    ],
    defaultLocale: "kh",
    lazy: true,
    langDir: "locales/",
    noPrefixDefaultLocale: true,
    vueI18n: {
      fallbackLocale: "kh",
      messages: {
        "en-US": require("./locales/en-US"),
        "kh-KH": require("./locales/kh-KH"),
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
