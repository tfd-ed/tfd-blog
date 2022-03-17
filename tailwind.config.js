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
    },
    extend: {
      backgroundColor: (theme) => ({
        facebook: "#1778F2",
        aba: "#005d85",
      }),
      colors: (theme) => ({
        facebook: "#1778F2",
        ba: "#005d85",
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
