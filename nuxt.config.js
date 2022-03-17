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
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxt/postcss8",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/moment",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content", "nuxt-i18n", "@nuxt/image"],
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
