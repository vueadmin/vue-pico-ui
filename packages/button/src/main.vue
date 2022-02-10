<template>
  <a
    @click="handleClick"
    href="#close"
    role="button"
    :class="[
      type,
      {
        outline,
      },
    ]"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "PicoButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    outline: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>
