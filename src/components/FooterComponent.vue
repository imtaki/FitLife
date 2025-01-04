<script lang="ts">
import { defineComponent } from 'vue';
import { useDark } from '@vueuse/core';

interface  FooterLink {
  name: string;
  path: string;
}
export default defineComponent({
  name: 'FooterComponent',
  data(): { footerLinks: FooterLink[] } {
    return {
      footerLinks: [
        { name: 'About Us', path: '/aboutus' },
        { name: 'License', path: '/license' },
        { name: 'Contribute', path: '/contribute' },
        { name: 'Contact', path: '/contact' },
      ],
    };
  },
  computed: {
    currentYear(): number {
      return new Date().getFullYear();
    },
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
});
</script>

<template>
  <footer
    :class="isDark ? 'bg-black text-white border-t border-stone-200' : 'bg-white text-black border-t border-gray-300'"
    class="flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-3 py-4 text-center md:justify-between"
  >
    <p :class="isDark ? 'text-white' : 'text-black'" class="mx-5 text-xl font-semibold">
      © {{ currentYear }} FitLife
    </p>
    <ul class="flex gap-x-8 mx-5">
      <li v-for="(link, index) in footerLinks" :key="index">
        <router-link
          :to="link.path"
          :class="isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'"
        >
          <span>{{ link.name }}</span>
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
</style>
