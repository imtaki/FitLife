<script lang="ts">
import './assets/main.css';
import NavBar from './components/NavBar.vue';
import FooterComponent from './components/FooterComponent.vue';
import { useDark } from '@vueuse/core';

export default {
  components: {
    NavBar,
    FooterComponent,
  },
  setup() {
    const isDark = useDark({
      storageKey: 'vueuse-dark-mode',
      value: true,
    });

    return {
      isDark,
    };
  },
};
</script>

<template>
  <div :class="isDark ? 'bg-black text-white' : 'bg-white text-black'" class="font-sans ">
    <NavBar />
    <main class="mx-5 ">
      <RouterView />
    </main>
    <FooterComponent />
  </div>
</template>

<style>
</style>

