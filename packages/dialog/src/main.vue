<template>
  <dialog :open="visible" @click.self="handleClose">
    <article>
      <header>
        <a
          href="#close"
          aria-label="Close"
          class="close"
          @click="handleClose"
        ></a>
        {{ title }}
      </header>
      <slot name="main"></slot>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </article>
  </dialog>
</template>


<script>
export default {
  name: "PicoDialog",
  props: {
    visible: Boolean,
    title: String,
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    },
  },
};
</script>