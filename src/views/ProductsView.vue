<script lang="ts">
import { defineComponent } from 'vue';
import data from '@/products.json';
import CardComponent from '@/components/CardComponent.vue';

export default defineComponent({
  name: 'ProductsView',
  components: {
    CardComponent,
  },
  setup() {
    const products = data.products;
    const allItems = products.flatMap(category => category.items.map(item => ({...item, category: category.category, })));
    return {
      allItems,
    };
  },
});
</script>


<template>
  <main class="container mx-auto min-h-screen">
    <h1 class="text-5xl font-semibold text-center my-10">All Products</h1>
    <div
      class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-10"
    >
      <CardComponent
        v-for="(item, index) in allItems"
        :key="index"
        :title="item.title"
        :description="item.description"
        :image="item.image"
      />
    </div>
  </main>
</template>


<style scoped>
</style>
