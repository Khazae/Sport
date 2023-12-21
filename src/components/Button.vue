<template>
  <button type="submit" class="link button" :class="className">
    <div class="link__text button_text"><slot></slot></div>
  </button>
</template>

<script>
export default {
  props: ["className"],
  name: "ButtonComponent",
};
</script>

<style scoped>
.button {
  padding: 17px 45px;
  border: none;
  cursor: pointer;
}

.button_text {
  font-size: 18px;
  font-weight: 700;
  font-family: "Inter", sans-serif;
}
</style>
