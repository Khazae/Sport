<template>
  <div
    id="app"
    :class="{ dark: theme == 'dark', light: theme == 'light' }"
    v-if="theme"
  >
    <router-view />
  </div>
</template>

<script>
import requests from "@/api/requests";
import { setTokenToClient } from "@/api";

export default {
  name: "App",
  data() {
    return {
      theme: null,
    };
  },
  methods: {
    getToken() {
      setTokenToClient(requests.getToken());
      requests.getProfile();
    },
    getColorScheme() {
      requests.getColorScheme().then((res) => {
        if (res) {
          localStorage.setItem("theme", res);
        }
        this.theme = res;
        this.checkImpaired();
      });
    },
    checkImpaired() {
      if (this.theme === "dark") {
        document.body.setAttribute("dark", "");
      } else {
        document.body.removeAttribute("dark");
      }
    },
  },
  mounted() {
    this.getColorScheme();

    if (this.$store.state.auth.authorized) this.getToken();
  },
};
</script>

<style scoped></style>
