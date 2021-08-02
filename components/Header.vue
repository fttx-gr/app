<template>
  <div>
    <nav class="bg-gray-800 sticky top-0 py-2">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <nuxt-link to="/" class="flex-shrink-0">
              <img
                class="h-10 w-10"
                src="@/static/img/fttx-logo.png"
                alt="FTTx.gr logo"
              />
            </nuxt-link>

            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-2">
                <nuxt-link
                  to="/"
                  :class="[
                    this.$route.name == 'index' ? 'text-white bg-gray-900' : '',
                    'text-gray-300'
                  ]"
                  class="px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  ><i class="fas fa-map-marked-alt mr-1"></i> Map</nuxt-link
                >
                <nuxt-link
                  to="/add"
                  :class="[
                    this.$route.name == 'add' ? 'text-white bg-gray-900' : '',
                    'text-gray-300'
                  ]"
                  class="px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  ><i class="fas fa-plus-circle mr-1"></i> Add
                  Cabinet</nuxt-link
                >
                <nuxt-link
                  to="/speed"
                  :class="[
                    this.$route.name == 'speed' ? 'text-white bg-gray-900' : '',
                    'text-gray-300'
                  ]"
                  class="px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  ><i class="fas fa-tachometer-alt mr-1"></i> Test Your
                  Speed</nuxt-link
                >
                <nuxt-link
                  to="/stats"
                  :class="[
                    this.$route.name == 'stats' ? 'text-white bg-gray-900' : '',
                    'text-gray-300'
                  ]"
                  class="px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  ><i class="fas fa-chart-pie mr-1"></i> Stats</nuxt-link
                >
                <a
                  href="https://github.com/fttx-gr"
                  class="text-gray-300 ml-4 px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  ><i class="fab fa-github mr-1"></i> GitHub</a
                >
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="relative w-full md:w-auto">
              <form class="w-full">
                <gmap-autocomplete
                  type="text"
                  placeholder="Ex. Filellinon 10, Athens, Greece"
                  class="w-60 sm:w-64 bg-gray-900 pr-10 rounded-full px-4 py-2 lg:min-w-24 relative outline-none text-sm text-white focus:w-72 transition-all ease-in-out duration-200 shadow-sm"
                  @place_changed="setPlace"
                />
                <div
                  class="absolute inset-y-0 right-0 flex items-center mr-5 text-sm text-white"
                >
                  <i
                    class="fas fa-search cursor-pointer transition ease-in-out duration-200"
                  ></i>
                </div>
              </form>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden" style="z-index: 9999">
            <!-- Mobile menu button -->
            <button
              @click.prevent="hamburgerClick()"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <!-- Menu open: "hidden", Menu closed: "block" -->
              <svg
                :class="hamburger ? 'hidden' : 'block'"
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!-- Menu open: "block", Menu closed: "hidden" -->
              <svg
                :class="hamburger ? 'block' : 'hidden'"
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div :class="hamburger ? 'block' : 'hidden'">
        <!-- hidde hamburger whenever you navigate to another page via the menu -->
        <div class="px-2 pt-2 pb-3 sm:px-3" @click.prevent="hamburgerClick()">
          <nuxt-link
            to="/"
            :class="
              this.$route.name === 'index'
                ? 'text-white bg-gray-900'
                : 'text-gray-300'
            "
            class="block px-3 py-2 rounded-md text-base font-medium text-white focus:outline-none focus:text-white focus:bg-gray-700"
            ><i class="fas fa-map-marked-alt"></i> Map</nuxt-link
          >
          <nuxt-link
            to="/add"
            :class="
              this.$route.name == 'add'
                ? 'text-white bg-gray-900'
                : 'text-gray-300'
            "
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            ><i class="fas fa-plus-circle"></i> Add Cabinet</nuxt-link
          >
          <nuxt-link
            to="/stats"
            :class="
              this.$route.name == 'stats'
                ? 'text-white bg-gray-900'
                : 'text-gray-300'
            "
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            ><i class="fas fa-chart-pie"></i> Stats</nuxt-link
          >
          <nuxt-link
            to="/speed/"
            :class="[
              this.$route.name == 'speed' ? 'text-white bg-gray-900' : '',
              'text-gray-300'
            ]"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            ><i class="fas fa-tachometer-alt"></i> Test Your Speed</nuxt-link
          >
          <a
            href="https://github.com/fttx-gr"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            ><i class="fab fa-github"></i> GitHub</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      profileDropdown: false,
      vcoConfig: {
        events: ["dblclick", "click"],
        isActive: true
      },
      hamburger: false
    };
  },
  methods: {
    hamburgerClick() {
      this.hamburger = !this.hamburger;
      this.$root.$emit("hamburgerState", this.hamburger);
    },
    setPlace(place) {
      this.$root.$emit("setPlace", place);
    }
  }
};
</script>
<style scoped lang="postcss">
html,
body {
  margin: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter {
  transform: translateY(-50px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
</style>
