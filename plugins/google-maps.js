import Vue from "vue";

import * as VueGoogleMaps from "@/node_modules/vue2-google-maps";
import VueGeolocation from "vue-browser-geolocation";
Vue.use(VueGeolocation);

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places", "geometry"]
  }
});
