<script lang="ts">
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineComponent({
  name: 'NavBar',
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      navLinks: [
        { name: 'Produkty', path: '/products', icon: ['fas', 'store'] },
        { name: 'Kontakt', path: '/contact', icon: ['fas', 'envelope'] },
        { name: 'Kosik', path: '/cart', icon: ['fas', 'cart-shopping']}
      ],
    };
  },
});
</script>

<template>
  <header>
    <nav class="relative overflow-hidden p-4 bg-black w-full">
      <div class="flex items-center justify-center">
        <div class="absolute left-4 flex items-center">
          <FontAwesomeIcon class="text-3xl text-white" :icon="['fas', 'dumbbell']" />
          <a href="/" class="antialiased text-3xl ml-2 text-white block py-1 font-semibold">
            <span>FitLife</span>
          </a>
        </div>

        <div class="flex justify-center items-center">
          <ul class="flex gap-x-8">
            <li v-for="(link, index) in navLinks" :key="index">
              <router-link
                :to="link.path"
                class="flex items-center text-white hover:text-gray-300 transition duration-200"
              >
                <FontAwesomeIcon :icon="link.icon" class="mr-2" />
                <span>{{ link.name }}</span>
              </router-link>
            </li>
          </ul>
        </div>

        <button class="place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[34px] min-h-[34px] rounded-md bg-white border-transparent text-stone-800 hover:bg-stone-200/10 hover:border-stone-600/10 shadow-none hover:shadow-none ml-auto grid lg:hidden">
        </button>
      </div>
    </nav>
  </header>
</template>

<style>
.router-link-active a {
  border-bottom: 2px solid white;
  padding-bottom: 1rem;
}
</style>

