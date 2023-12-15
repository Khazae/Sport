<template>
  <div class="navigationContainer">
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    document.body.style.backgroundColor = "#ebeef3";
  },
  beforeDestroy() {
    document.body.style.backgroundColor = "";
  },
};
</script>

<style scoped>
.navigationContainer {
  padding-top: 97px;
  padding-bottom: 200px;
  background-color: #ebeef3;
}
</style>
