<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    buttonText: {
      type: String,
      default: 'See More',
    },
    isDark: {
        type: Boolean,
        default: true, 
    }
  },
});
</script>

<template>
  <router-link :to="`/products/${slug}`" class="h-[500px] block">
    <div
      class="h-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-transform text-center duration-300 hover:scale-105 flex flex-col"
    >
      <div class="w-full h-64 mb-4 overflow-hidden rounded-t-lg">
        <img
          :src="image"
          alt="Product Image"
          class="w-full h-full object-contain"
        />
      </div>
      <h3 class="text-2xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{{ description }}</p>
      <div class="mt-auto">
        <a
          href="#"
          class="px-4 py-2 rounded-lg transition-all duration-300"
          :class="isDark ? 'bg-black hover:bg-gray-500 text-white' : 'bg-white text-black hover:bg-gray-500'"
        >
          {{ buttonText }}
        </a>
      </div>
    </div>
  </router-link>
</template>
