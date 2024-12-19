<script lang="ts">
import { defineComponent } from 'vue';
import { useDark } from '@vueuse/core';
import data from "@/products.json"
import CardComponent from '@/components/CardComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    CardComponent
  },
  setup() {
    const isDark = useDark({
      storageKey: 'vueuse-dark-mode', 
      value: true, 

    });
    const products = data.products;
    const limitedProducts = products.slice(0, 4);

    return {
      isDark,
      limitedProducts,
    };
  },
});
</script>

<template>
  <main :class="isDark ? 'dark' : ''">
    <div class="container mx-auto min-h-screen">
      <section
        :class="isDark ? 'bg-black text-white' : 'bg-white text-black'"
        class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mb-12"
      >
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1
            class="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl"
            :class="isDark ? ' text-white' : ' text-black'"
          >
            #1 Rated Supplement Store
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Enhance your workout and health with premium supplements. Explore our wide selection of products.
          </p>
          <a
            :class="isDark ? 'bg-white text-black' : 'bg-black text-white'"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg hover:bg-gray-700 transition duration-300 sm:text-center sm:justify-center"
          >
            Shop Now
          </a>
          <a
            :class="isDark ? 'text-white border-white' : 'text-black border-black'"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Learn More
          </a>
        </div>

        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="/landing.png"
            alt="Supplement Store"
            class="rounded-lg"
          />
        </div>
      </section>
        <h1 class="flex flex-row text-5xl items-center font-semibold justify-center" :class="isDark ? 'bg-black text-white' : 'bg-white text-black'">
          Featured Products
        </h1>
        <div
          class="grid max-w-screen-xl place-self-center mx-auto gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 mb-10"
        >
          <CardComponent
            v-for="(product, index) in limitedProducts"
            :key="index"
            :title="product.title"
            :description="product.description"
            :image="product.image"
            :isDark="isDark"
          />
        </div>

    </div>
  </main>
</template>

<style>
</style>

