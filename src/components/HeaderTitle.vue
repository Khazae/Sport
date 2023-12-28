<template>
  <div class="layoutTitleContent">
    <div class="container">
      <h3 class="title">{{ title }}</h3>
    </div>
  </div>
</template>

<script>
export default { props: ["title"] };
</script>

<style scoped>
.layoutTitleContent {
  width: 100%;
  min-height: 100px;
  background-image: url("../assets/layoutBg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-bottom: 80px;
  padding: 26px 0;
  overflow: hidden;
  height: auto;
}

.title {
  max-width: 913px;
  font-size: 40px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  line-height: 48.76px;
  color: var(--color-white);
}
</style>
