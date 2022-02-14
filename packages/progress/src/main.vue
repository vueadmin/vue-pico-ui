<template>
  <progress id="indeterminate-progress" indeterminate :value="value" :max="max"></progress>
</template>

<script>
export default {
  name: "PicoProgress",
  props: {
    value: String,
    max: String,
    indeterminate: Boolean,
  }
};
</script>
