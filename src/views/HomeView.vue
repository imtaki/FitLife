<script lang="ts">
import { defineComponent } from 'vue';
import { useDark } from '@vueuse/core';

export default defineComponent({
  name: 'HomeView',
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
  <main :class="isDark ? 'dark' : ''">
    <div class="container mx-auto min-h-screen">
      <section
        :class="isDark ? 'bg-black text-white' : 'bg-white text-black'"
        class="flex flex-col items-center justify-start h-screen mt-20 p-8"
      >
        <h1 class="text-7xl font-extrabold mb-4 text-left sm:text-center">#1 Rated Supplement Store</h1> 
        <p class="text-xl mb-8 max-w-lg text-center text-stone-500">
          Enhance your workout and health with premium supplements. Explore our wide selection of products.
        </p>
        <a :class="isDark ? 'bg-white text-black' : 'bg-black text-white'"
          class="cursor-pointer px-8 py-3 rounded-full text-lg hover:bg-gray-700 transition duration-300">
          Shop Now
        </a>
      </section>
    </div>
  </main>
</template>

