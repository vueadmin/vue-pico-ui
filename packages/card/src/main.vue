<template>
  <article>
    <header v-if="this.$slots.header">
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer v-if="this.$slots.footer">
      <slot name="footer"></slot>
    </footer>
  </article>
</template>

<script>
export default {
  name: "PicoCard"
};
</script>
