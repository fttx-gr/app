<template>
  <div ref="change">
    <i :class="i"></i>
  </div>
</template>
<script>
export default {
  props: {
    i: {
      required: true,
      type: String,
    },
  },
  watch: {
    i: function (newVal, oldVal) {
      this.$refs.change.children[0].classList = newVal;
    },
  },
};
</script>
