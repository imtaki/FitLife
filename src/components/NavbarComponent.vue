<script lang="ts">
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useDark } from '@vueuse/core';
import { useCartStore } from '@/stores/cartStore';

export default defineComponent({
  name: 'NavBar',
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      mobileMenuToggle: false,
      navLinks: [
        { name: 'Home', path: '/', icon: ['fas', 'house'] },
        { name: 'Products', path: '/products', icon: ['fas', 'store'] },
        { name: 'Contact', path: '/contact', icon: ['fas', 'envelope'] },
      ],
    };
  },
  computed: {
    cartItemCount() {
      const cartStore = useCartStore();
      return cartStore.getCart.reduce((total, item) => total + item.quantity, 0);
    }
  },
  methods: {
    getLinkClass(to: string) {
      if (this.$route.path === to) {
        return this.isDark
          ? 'border-b-2 border-white pb-1'
          : 'border-b-2 border-black pb-1';
      }
      return this.isDark
        ? 'text-white hover:text-gray-500'
        : 'text-black hover:text-gray-700';
    },
    toggleDarkMode() {
      this.isDark = !this.isDark;
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
  <header>
    <nav
      :class="isDark ? 'bg-black text-white border-b border-gray-800' : 'bg-white text-black border-b border-gray-300'"
      class="relative p-4 w-full"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <FontAwesomeIcon class="text-3xl" :class="isDark ? 'text-white' : 'text-black'" :icon="['fas', 'dumbbell']" />
          <a
            href="/"
            :class="isDark ? 'text-white' : 'text-black'"
            class="antialiased text-3xl ml-2 block py-1 font-semibold"
          >
            <span>FitLife</span>
          </a>
        </div>

        <div class="hidden lg:flex lg:justify-center lg:items-center">
          <ul class="flex gap-x-8">
            <li v-for="(link, index) in navLinks" :key="index">
              <router-link
                :to="link.path"
                class="flex items-center transition duration-200"
                :class="getLinkClass(link.path)"
              >
                <FontAwesomeIcon
                  :icon="link.icon"
                  class="mr-2"
                  :class="isDark ? 'text-white' : 'text-black'"
                />
                <span :class="isDark ? 'text-white' : 'text-black'">{{ link.name }}</span>
              </router-link>
            </li>
          </ul>
        </div>

        <div class="hidden lg:flex items-center space-x-5">
          <a href="/login" class="px-3 py-1">
            <FontAwesomeIcon :icon="['fas', 'user']" :class="isDark ? 'text-white' : 'text-black'" />
          </a>
          <a href="/cart" class="px-3 py-1 relative">
            <FontAwesomeIcon :icon="['fas', 'cart-shopping']" :class="isDark ? 'text-white' : 'text-black'" />
            <span v-if="cartItemCount >= 0" 
              class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {{ cartItemCount }}
            </span>
          </a>
          <button
            @click="toggleDarkMode"
            class="px-4 py-2 rounded-full focus:outline-none"
            :class="isDark ? 'text-white' : 'text-black'"
          >
            <FontAwesomeIcon :icon="isDark ? ['fas', 'sun'] : ['fas', 'moon']" />
          </button>
        </div>

        <button
          @click="mobileMenuToggle = !mobileMenuToggle"
          class="lg:hidden focus:outline-none"
        >
          <FontAwesomeIcon
            :icon="mobileMenuToggle ? ['fas', 'times'] : ['fas', 'bars']"
            :class="isDark ? 'text-white' : 'text-black'"
            class="text-2xl"
          />
        </button>
      </div>

      <div
        v-if="mobileMenuToggle"
        :class="isDark ? 'bg-black text-white' : 'bg-white text-black'"
        class="lg:hidden mt-2 p-4 space-y-4 rounded-md"
      >
        <ul class="flex flex-col text-center space-y-2">
          <li v-for="(link, index) in navLinks" :key="index">
            <router-link
              :to="link.path"
              class="block transition duration-200"
              :class="isDark ? 'hover:text-gray-300' : 'hover:text-gray-600'"
              @click="mobileMenuToggle = false"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
        <div class="flex space-x-6 justify-center mt-4">
          <a href="/login">
            <FontAwesomeIcon :icon="['fas', 'user']" :class="isDark ? 'text-white' : 'text-black'" />
          </a>
          <a href="/cart">
            <FontAwesomeIcon :icon="['fas', 'cart-shopping']" :class="isDark ? 'text-white' : 'text-black'" />
            <span v-if="cartItemCount >= 0" 
              class="absolute top-44 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {{ cartItemCount }}
            </span>
          </a>
          <button
            @click="toggleDarkMode"
            class=""
            :class="isDark ? 'text-white' : 'text-black'"
          >
            <FontAwesomeIcon :icon="isDark ? ['fas', 'sun'] : ['fas', 'moon']" />
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
</style>



