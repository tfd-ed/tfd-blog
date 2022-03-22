import createSitemapRoutes from "./utils/createSitemap";
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
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxt/content",
    "nuxt-i18n",
    "vue-social-sharing/nuxt",
    [
      "nuxt-cookie-control",
      {
        css: true,
        locales: ["en", "kh"],
        barPosition: "bottom-full",
        colors: {
          barBackground: "#2c3e50",
          checkboxActiveBackground: "#2ecc71",
          checkboxInactiveBackground: "#95a5a6",
        },
        text: {
          locale: {
            kh: {
              acceptAll: "យល់ព្រម",
              declineAll: "លុបចោលទាំងអស់",
              manageCookies: "គ្រប់គ្រងខូគី",
              unsaved: "អ្នកមានការកំណត់ដែលមិនបានរក្សាទុក",
              close: "ចាកចេញ",
              save: "រក្សាទុក",
              necessary: "ខូឃីចាំបាច់",
              optional: "ខូគីជ្រេីសរើស",
            },
            en: {
              acceptAll: "Accept",
              declineAll: "Delete all",
              manageCookies: "Manage cookies",
              unsaved: "You have unsaved settings",
              close: "Close",
              save: "Save",
              necessary: "Necessary cookies",
              optional: "Optional cookies",
              functional: "Functional cookies",
              blockedIframe: "To see this, please enable functional cookies",
              here: "here",
            },
          },
        },
      },
    ],
    "@nuxtjs/sitemap",
    // "cookie-universal-nuxt",
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
      enabled: process.env.NODE_ENV !== "production",
      sendHitTask: true,
    },
    autoTracking: {
      screenview: true,
    },
  },

  // Cookie control configure
  cookies: {
    necessary: [
      {
        name: {
          en: "Default cookies",
          kh: "Cookie មានស្រាប",
        },

        description: {
          en: "Used for cookie control.",
          kh: "ប្រើសម្រាប់ការគ្រប់គ្រង Cookie ។",
        },
        // cookies: ["cookie_control_consent", "cookie_control_enabled_cookies"],
      },
    ],
    optional: [
      {
        name: {
          en: "Google Analytics",
          kh: "Google វិភាគ",
        },
        description: {
          en: "Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.",
          kh: "Google Analytics គឺជាសេវាកម្មវិភាគគេហទំព័រដែលផ្តល់ដោយ Google ដែលតាមដាន និងរាយការណ៍អំពីចរាចរណ៍គេហទំព័រ។",
        },
        // src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`,
        // async: true,
        // cookies: [
        //   "_ga",
        //   "_gat_gtag_" + process.env.GOOGLE_ANALYTICS_ID_,
        //   "_gid",
        // ],
        accepted: () => {
          document.cookie = "google_analytics_enabled=true";
        },
        declined: () => {
          document.cookie = "google_analytics_enabled=";
          document.cookie = "cookie_widget_hidden=true";
        },
      },
    ],
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
