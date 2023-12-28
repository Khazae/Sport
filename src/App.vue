<template>
  <div id="app" :class="{'dark':theme=='dark','light':theme=='light'}" v-if="theme">
    <router-view/>
  </div>
</template>

<script>
import requests from "@/api/requests";
import {setTokenToClient} from "@/api";

export default {
  name: "App",
  data() {
    return {
      theme: null
    }
  },
  methods: {
    getToken() {
      setTokenToClient(requests.getToken());
      requests.getProfile()
    },
    getColorScheme() {
      requests.getColorScheme().then(res => {
        this.theme = res
      })
    }
  },
  mounted() {
    this.getColorScheme()
    if (this.$store.state.auth.authorized)
      this.getToken()
  }
};
</script>

<style scoped></style>
