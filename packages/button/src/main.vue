<template>
  <a
    @click="handleClick"
    href="javascript:void(0);"
    role="button"
    :class="[
      type,
      {
        outline: isOutline,
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
    isOutline: Boolean,
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
