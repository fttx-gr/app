<template>
  <div>
    <div v-if="loggedIn">
      <h1 class="text-center font-semibold text-lg mt-8">
        Welcome back, {{ user.email }}!
      </h1>
      <form class="max-w-lg mt-8 mx-auto px-8" @submit.prevent="submit">
        <div class="flex flex-wrap mb-6 -mx-3">
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="grid-id"
              >Cabinet ID</label
            >
            <input
              class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border-gray-400 border rounded appearance-none focus:outline-none focus:bg-white"
              id="grid-id"
              type="number"
              required
              v-model="id"
            />
            <!-- border-red-500 -->
            <!-- <p class="text-xs italic text-red-500">Please fill out this field.</p> -->
          </div>
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="grid-isp"
              >ISP</label
            >
            <div class="relative">
              <select
                class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border-gray-400 border rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-isp"
                required
                v-model="isp"
              >
                <option>OTE</option>
                <option>Vodafone</option>
                <option>WIND</option>
                <option>RURALCONNECT</option>
              </select>
              <div
                class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap mb-6 -mx-3">
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="grid-lat"
              >Latitude</label
            >
            <input
              class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border-gray-400 border rounded appearance-none focus:outline-none focus:bg-white"
              id="grid-lat"
              type="number"
              step="any"
              v-model="lat"
            />
            <!-- border-red-500 -->
            <!-- <p class="text-xs italic text-red-500">Please fill out this field.</p> -->
          </div>
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="grid-lng"
              >Longtitude</label
            >
            <input
              class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border-gray-400 border rounded appearance-none focus:outline-none focus:bg-white"
              id="grid-lng"
              type="number"
              step="any"
              v-model="lng"
            />
            <!-- border-red-500 -->
            <!-- <p class="text-xs italic text-red-500">Please fill out this field.</p> -->
          </div>
        </div>
        <div class="flex flex-wrap mb-6 -mx-3">
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="grid-img"
              >Image URL</label
            >
            <input
              class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border-gray-400 border rounded appearance-none focus:outline-none focus:bg-white"
              id="grid-img"
              type="text"
              placeholder="Ex. https://imgur.com/"
              v-model="img"
            />
            <!-- border-red-500 -->
            <!-- <p class="text-xs italic text-red-500">Please fill out this field.</p> -->
          </div>
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="grid-type"
              >Type</label
            >
            <div class="relative">
              <select
                class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border-gray-400 border rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-type"
                required
                v-model="type"
              >
                <option>ADSL</option>
                <option>VDSL</option>
                <option>FTTH</option>
                <option>RURALCONNECT</option>
              </select>
              <div
                class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <button
            type="submit"
            class="px-4 py-2 font-bold bg-blue-500/40 text-blue-500 rounded hover:bg-blue-500/50 ease-in-out duration-150 border border-blue-500"
          >
            Submit
          </button>
          <button
            @click.prevent="signOut()"
            type="submit"
            class="px-4 py-2 font-bold bg-red-500/40 text-red-500 rounded hover:bg-red-500/50 ease-in-out duration-150 border border-red-500"
          >
            Sign out
          </button>
        </div>
      </form>
    </div>
    <div
      v-else-if="loggedIn === false"
      class="flex flex-col justify-between max-w-lg p-3 m-auto w-80 mt-16"
    >
      <div class="flex flex-col space-y-4">
        <div>
          <h1 class="text-2xl font-semibold text-center">
            You are not logged in
          </h1>
          <p class="text-center py-2">
            Login now and start adding FTTx cabinets
          </p>
        </div>
        <form class="flex flex-col space-y-4">
          <input
            v-model="email"
            class="bg-gray-200 border border-gray-400 rounded-md py-2 w-full px-2"
            required
            type="email"
            placeholder="Email"
          /><button
            @click.prevent="signIn()"
            class="bg-blue-500/25 text-blue-500 font-semibold border border-blue-500 py-2 px-2 rounded-md hover:bg-blue-500/40 ease-in-out duration-150 flex justify-center items-center"
            type="submit"
          >
            Sign in with magic link
            <Icon
              v-if="sending"
              i="text-white animate-spin fas fa-spinner fa-lg ml-2"
            ></Icon>
          </button>
        </form>
        <div
          v-if="noEmail"
          class="text-center font-semibold text-red-500 uppercase"
        >
          Email is required
        </div>
        <h2
          v-if="checkEmail"
          class="text-center font-semibold text-green-500 uppercase"
        >
          ✨ Check your email
        </h2>
      </div>
    </div>
  </div>
</template>
<script>
import { supabase } from "@/utils/supabase-client";
export default {
  head() {
    return {
      title: "FTTx.gr - Add a cabinet in the map",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Add a FTTx cabinet in the map and contribute to the database"
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Add a FTTx cabinet in the map and contribute to the database"
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Add a FTTx cabinet in the map and contribute to the database"
        }
      ]
    };
  },
  data() {
    return {
      id: null,
      isp: null,
      lat: null,
      lng: null,
      type: null,
      img: null,
      name: null,
      email: null,
      success: false,
      failed: false,
      error: null,
      email: null,
      checkEmail: false,
      sending: false,
      noEmail: null
    };
  },
  methods: {
    async submit() {
      const data = {
        id: Number(this.id),
        isp: this.isp,
        position: { lat: Number(this.lat), lng: Number(this.lng) },
        type: this.type,
        img: this.img
      };
      try {
        if (this.type === "RURALCONNECT") data.type = "RURCON";
        const res = await this.$axios({
          method: "post",
          url: "/api/auth/cabinet",
          headers: { "content-type": "application/json" },
          data
        });
        this.$toast.success(
          "Submitted! Thanks for submitting a new cabinet! It's pending approval now..."
        );
        this.error = res.data;
      } catch (e) {
        this.failed = true;
        this.$toast.error(
          "Uh-oh! Something went wrong while trying to submit a new Cabinet. Make sure you have actual coordinates."
        );
      }
    },
    async signIn() {
      this.sending = true;
      if (!this.email) this.noEmail = true;
      else {
        const { user, session, error } = await supabase.auth.signIn(
          {
            email: this.email
          },
          { redirectTo: `${this.$config.url}add` }
        );
        if (!error) this.checkEmail = true;
      }

      this.sending = false;
    },
    async signOut() {
      const { error } = await supabase.auth.signOut();
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    },
    user() {
      return this.$store.state.user;
    }
  },
  async mounted() {
    const { lat, lng } = this.$route.query;
    if (lat && lng) {
      this.lat = lat;
      this.lng = lng;
    }
  }
};
</script>
