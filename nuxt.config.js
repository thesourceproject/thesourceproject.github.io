export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "The Source Project",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content:
          "The Source Project is an e-learning platform composed of free tutorials on Java, Javascript, Python and so on. Whether you want to build softwares, games or web applications, our tutorials will definitely assist you."
      },
      {
        hid: "google-site-verification",
        name: "google-site-verification",
        content: "NBXKl5RAGYQH3Rp9PKrszzdV4bRMOLkHjIjvfNDo2xE"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.png"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=McLaren&family=Poppins&family=Ubuntu+Mono&display=swap"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  purgeCSS: {
    whitelistPatternsChildren: [/token$/]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/prism"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/sitemap"],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true
  },

  // Configure the generation of your universal web application to a static web application.
  generate: {
    crawler: false,
    fallback: true
  },

  sitemap: {
    hostname: "https://thesourceproject.github.io/"
  }
};
