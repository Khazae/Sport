<template>
  <div id="app">
    <Header />
    <HomeView />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import HomeView from "./views/HomeView.vue";

export default {
  name: "App",
  components: {
    Header,
    HomeView,
  },
};
</script>

<style></style>
