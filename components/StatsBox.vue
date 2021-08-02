<template>
  <div
    class="flex flex-col justify-around p-6 bg-dark-gray/75 border border-gray-700 rounded shadow-md w-36 justify-items-center"
  >
    <div>
      <p class="flex items-center justify-center text-base text-gray-200">
        Cabinets
      </p>
    </div>
    <div>
      <p
        class="flex items-center justify-center text-2xl font-bold text-gray-100"
      >
        <animated-number :value="cabinets" :duration="3000" round="1" />
      </p>
    </div>
    <div>
      <p class="flex items-center justify-center text-base text-gray-200">
        Centers (A/K)
      </p>
    </div>
    <div>
      <p
        class="flex items-center justify-center text-2xl font-bold text-gray-100"
      >
        <animated-number :value="centers" :duration="5000" round="1" />
      </p>
    </div>
  </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
export default {
  components: {
    AnimatedNumber
  },
  props: ["cabinets", "centers"]
};
</script>

<style></style>
