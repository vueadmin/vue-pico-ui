<template>
  <details :open="open">
    <summary><slot name="title"></slot></summary>
    <slot></slot>
  </details>
</template>

<script>
export default {
  name: "PicoCollapse",
  props: {
    open: Boolean,
  },
};
</script>
