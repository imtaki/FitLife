<script lang="ts">
import './assets/main.css'
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue';
export default {
  components: {
    NavBar,
    FooterComponent,
  },
}
</script>

<template>
  <div class="font-sans">
    <NavBar />
    <main class="mx-5">
      <RouterView />
    </main>
    <FooterComponent />
  </div>
</template>
