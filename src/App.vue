<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import requests from "@/api/requests";
import { setTokenToClient } from "@/api";

export default {
  name: "App",
  methods: {
    getToken() {
      setTokenToClient(requests.getToken());
      requests.getProfile();
    },
  },
  mounted() {
    if (this.$store.state.auth.authorized) this.getToken();
  },
};
</script>

<style scoped></style>
