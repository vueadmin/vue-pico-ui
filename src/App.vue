<template>
  <div class="grid">
    <div>
      <PicoButton @click="onClickButton">提交</PicoButton>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickButton(e) {
      console.log(e);
    }
  }
};
</script>

<style>

</style>
