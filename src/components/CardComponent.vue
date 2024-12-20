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
    isDark: {
        type: Boolean,
        defaut: true, 
    }
  }
});
</script>

<template>
    <div
      class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-transform text-center duration-300 hover:scale-105"
    >
      <img
        :src="image"
        alt="Product Image"
        class="w-full h-60 object-cover rounded-t-lg mb-4"
      />
      <h3 class="text-2xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">{{ description }}</p>
      <a
        :class="isDark ? 'bg-black hover:bg-gray-500 text-white' : 'bg-white text-black hover:bg-gray-500'"
        class="px-4 py-2  rounded-lg transition-all duration-300"
      >
        See More
      </a>
    </div>
  </template>