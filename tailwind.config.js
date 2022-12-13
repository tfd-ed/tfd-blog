const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "class",
  i18n: {
    locales: ["en-US", "kh-KH"],
    defaultLocale: "kh-KH",
  },
  theme: {
    fontFamily: {
      sans: ["Source Sans Pro", "Kantumruy", ...defaultTheme.fontFamily.sans],
      mono: ["Georgia", "Noto Serif Khmer", ...defaultTheme.fontFamily.mono],
    },
    extend: {
      backgroundColor: (theme) => ({
        facebook: "#1778F2",
        aba: "#007297",
        bakong: "#f70110",
        tfd: "#dc2626",
      }),
      colors: (theme) => ({
        facebook: "#1778F2",
        aba: "#007297",
        aba_dark: "#055d7c",
        bakong: "#f70110",
        tfd: "#dc2626",
      }),
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#1f2937",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
