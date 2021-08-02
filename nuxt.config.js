import shrinkRay from "shrink-ray-current";
import publicRuntimeConfig from "./utils/config";
export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",

  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "FTTx.gr — Cabinets all around Greece!",
    htmlAttrs: {
      lang: "en",
      amp: true
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "FTTx Cabinets Map. Έλεγχος διαθεσιμότητας VDSL"
      },
      {
        name: "keywords",
        content:
          "fttx, fttc, ftth, greece, athens, OTE, WIND, Vodafone, Rural Connect, Έλεγχος διαθεσιμότητας VDSL Ελλάδα"
      },
      {
        name: "author",
        content: "treboryx"
      },
      {
        property: "og:title",
        content: "FTTx.gr — Cabinets Map in Greece"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "FTTx Cabinets Map. Έλεγχος διαθεσιμότητας VDSL"
      },
      {
        property: "og:url",
        content: "https://fttx.gr"
      },
      {
        property: "og:site_name",
        content: "FTTx"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "FTTx.gr — Cabinets Map in Greece"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "FTTx Cabinets Map. Έλεγχος διαθεσιμότητας VDSL"
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://fttx.gr/img/fttx-logo.png"
      },
      {
        hid: "twitter:image:alt",
        name: "twitter:image:alt",
        content: "https://fttx.gr/img/fttx-logo.png"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://fttx.gr/img/fttx-logo.png"
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: "https://fttx.gr/img/fttx-logo.png"
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "https://fttx.gr/img/fttx-logo.png"
      },
      {
        hid: "theme-color",
        name: "theme-color",
        content: "#109E92"
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "adsl, vdsl, greece, cabinet, fttc, ftth, fttx, vodafone, vodafone greece, wind, ote, cosmote, rural connect, vodafone greece, vf-gr, Έλεγχος διαθεσιμότητας VDSL, οπτικές ίνες"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [{ src: "https://kit.fontawesome.com/7dfe1f2920.js" }]
  },

  /*
   ** Global CSS
   */
  css: [],

  loading: {
    color: "#109E92"
  },

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: "@/plugins/google-maps" }, { src: "@/plugins/google-maps" }],

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/tailwindcss",
    "@nuxtjs/pwa"
  ],

  pwa: {
    manifest: {
      name: "FTTx.gr — Cabinets Map in Greece",
      short_name: "FTTx.gr",
      description: "FTTx.gr — Cabinets Map in Greece",
      lang: "en",
      theme_color: "#109E92"
    }
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://http.nuxtjs.org
    "@nuxtjs/axios",
    "vue-toastification/nuxt",
    "@nuxtjs/sitemap"
  ],

  sitemap: {
    hostname: "https://fttx.gr",
    gzip: true
  },

  toast: {
    transition: "Vue-Toastification__bounce",
    maxToasts: 3,
    newestOnTop: true,
    position: "bottom-right",
    timeout: 4000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: false,
    draggable: true,
    draggablePercent: 0.7,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false
  },

  /*
   ** Server Middleware
   */
  serverMiddleware: [{ route: "/api", handler: "~/api/index.js" }],
  /*
   ** For deployment you might want to edit host and port
   */
  publicRuntimeConfig,
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: { transpile: [/^vue2-google-maps($|\/)/] },
  env: {
    VUE_APP_GOOGLE_MAPS_API_KEY:
      process.env.NODE_ENV === "development"
        ? process.env.VUE_APP_GOOGLE_MAPS_API_KEY
        : "AIzaSyBg4wE12cEcuWJGQMbKNnb6m2CUTydSZSY",
    ANON_KEY: process.env.ANON_KEY,
    SUPABASE_URL: process.env.SUPABASE_URL
  },

  /*
   ** Use brotli compression
   */
  render: {
    compressor: shrinkRay()
  }
};
