<script lang="ts">
  export default {
    name: 'TestimonialComponent',
    props: {
      name: {
        type: String,
        
      },
      message: {
        type: String,
        
      },
      avatar: {
        type: String,
        
      },
      location: {
        type: String,
        
      },
      rating: {
        type: Number,
      }
    },
  };
  </script>
<template>
    <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md text-center">
      <img
        :src="avatar"
        alt="Customer avatar"
        class="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h3 class="text-lg font-semibold mb-2">{{ name }}</h3>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">{{ location }}</p>
      <div class="flex justify-center mb-4">
        <span
          v-for="n in 5"
          :key="n"
          class="mx-1"
          :class="n <= rating ? 'text-yellow-500' : 'text-gray-400'"
        >
          ★
        </span>
      </div>
      <p class="text-gray-700 dark:text-gray-300">{{ message }}</p>
    </div>
  </template>
  