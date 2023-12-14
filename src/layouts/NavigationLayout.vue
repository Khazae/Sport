<template>
  <div class="navigationContainer">
    <div class="layoutTitleContent">
      <div class="container">
        <h3 class="title"></h3>
      </div>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navigationContainer {
  padding-top: 97px;
  padding-bottom: 200px;
  background-color: #ebeef3;
}

.layoutTitleContent {
  width: 100%;
  max-width: 1440px;
  min-height: 100px;
  background-image: url("../assets/layoutBg.png");
  background-repeat: no-repeat;
  margin-bottom: 80px;
  padding: 26px 0;
  overflow: hidden;
}

.title {
  font-size: 40px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  color: #ffffff;
}
</style>
