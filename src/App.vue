<template>
  <v-app>
    <Navbar />
    <v-content style="margin: 2rem">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./shared/components/Navbar";

export default {
  name: "App",
  components: { Navbar },

  data: () => ({
    //
  })
};
</script>
