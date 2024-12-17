<script lang="ts">
export default {
  name: 'NavBar',
}
</script>

<template>
  <v-app>
    <v-app-bar app class="bg-black">
      <v-toolbar-title>
        <span class="text-3xl"> FitLife</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn to="/">Domov</v-btn>
      <v-btn to="/about">O nas</v-btn>
      <v-btn to="/services">Sluzby</v-btn>
      <v-btn to="/contact">Kontakt</v-btn>
    </v-app-bar>
  </v-app>
</template>
