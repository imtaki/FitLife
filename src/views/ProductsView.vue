<script lang="ts">
import { defineComponent } from 'vue';
import data from '@/products.json';
import CardComponent from '@/components/CardComponent.vue';

interface ProductItem {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  slug: string;
  image: string;
}
export default defineComponent({
  name: 'ProductsView',
  components: {
    CardComponent,
  },
  data() {
    const products = data.products;
    const allItems: ProductItem[] = products.flatMap(category =>
      category.items.map(item => ({
        ...item,
        category: category.category,
        slug: item.slug
      }))
    );


    return {
      allItems,
    };
  },
});
</script>

<template>
  <main class="container mx-auto min-h-screen">
    <h1 class="text-5xl font-semibold text-center my-10">All Products</h1>
    <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-10">
      <CardComponent
        class="h-full flex flex-col"
        v-for="item in allItems"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :image="item.image"
        :slug="item.slug"
        buttonText="Preview"
      />
    </div>
  </main>
</template>

<style scoped>
</style>
