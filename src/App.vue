<script lang="ts">
import './assets/main.css';
import NavBar from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import { useDark } from '@vueuse/core';

export default {
  components: {
    NavBar,
    FooterComponent,
  },
  data() {
    return {
      isDark: useDark({ storageKey: 'vueuse-dark-mode' }),
    };
  },
};
</script>

<template>
  <div :class="isDark ? 'bg-black text-white' : 'bg-white text-black'" class="font-sans ">
    <NavBar />
    <main class="mx-5">
      <RouterView />
    </main>
    <FooterComponent />
  </div>
</template>

<style>
</style>

