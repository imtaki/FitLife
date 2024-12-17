<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'FooterComponent',
  data() {
    return {
      footerLinks: [
        { name: 'O nas', path: '/aboutus'},
        { name: 'Licensia', path: '/license' },
        { name: 'Prispej', path: '/contribute'},
        { name: 'Kontakt', path: '/contact'}
      ],
    };
  },
  computed: {
    currentYear(): number{
        return new Date().getFullYear()
    }
  },
})
</script>

<template>
    <footer class="flex w-full flex-row flex-wrap items-center bg-black justify-center gap-x-12 gap-y-3 border-t border-stone-200 py-4 text-center md:justify-between">
      <p class="text-white mx-5">© {{ currentYear }} FitLife</p>
      <ul class="flex gap-x-8 mx-5">
        <li v-for="(link, index) in footerLinks" :key="index">
          <router-link
            :to="link.path"
            class="flex items-center text-white hover:text-gray-300 transition duration-200"
          >
            <span>{{ link.name }}</span>
          </router-link>
        </li>
      </ul>
    </footer>
  </template>