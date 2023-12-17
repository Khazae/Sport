<template>
  <div id="navigation">
    <Header :is-visible="isDropdownVisible" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "App",
  data() {
    return {
      isDropdownVisible: true,
    };
  },
  components: {
    Header,
    Footer,
  },
  mounted() {
    document.body.style.backgroundColor = "#ebeef3";
  },
  beforeDestroy() {
    document.body.style.backgroundColor = "";
  },
  beforeRouteUpdate(to, from, next) {
    this.isDropdownVisible = this.$route.name;

    next();
  },
};
</script>

<style scoped>
#navigation {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

router-view {
  flex: 1;
}

Footer {
  margin-top: auto;
}
</style>
