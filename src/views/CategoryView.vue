<script lang="ts">
import { defineComponent } from 'vue';
import { useDark } from '@vueuse/core';
import data from '@/products.json';
import CardComponent from '@/components/CardComponent.vue';
interface CategoryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}
export default defineComponent({
  name: 'CategoryView',
  components: {
    CardComponent
  },
  data() {
   const isDark = useDark({
      storageKey: 'vueuse-dark-mode',
    });
    const category = data.products.find(p => p.slug === this.$route.params.slug);
    const items: CategoryItem[] = category ? category.items : [];

    return {
      isDark,
      items,
      categoryName: category?.category
    };
  }
});
</script>

<template>
  <main :class="isDark ? 'dark' : ''">
    <div class="container mx-auto min-h-screen px-4 py-8">
      <h1 class="text-4xl font-bold mb-8" :class="isDark ? 'text-white' : 'text-black'">
        {{ categoryName }}
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardComponent
          v-for="item in items"
          :key="item.id"
          :title="item.title"
          :description="item.description"
          :image="item.image"
          :isDark="isDark"
          :slug="item.slug"
          buttonText="Preview"
        />
      </div>
    </div>
  </main>
</template>
