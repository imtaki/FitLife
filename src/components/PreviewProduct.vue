<script lang="ts">
import { defineComponent } from 'vue';
import data from '@/products.json';
import { useCartStore } from '@/stores/cartStore';
import type { Product } from '@/types/product';
export default defineComponent({
  name: 'PreviewProduct',
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  data() {
    const quantity = 1;
    const successMessage = false;
    
    const allItems = data.products.flatMap((category) =>
      category.items.map((item) => ({
        ...item,
        category: category.category,
      }))
    );
    const product = allItems.find((item) => item.slug === this.slug);
    return {
      product,
      selectedFlavor: product?.flavors?.[0] || '',
      successMessage,
      quantity,
    };
  },
  methods: {
    addToCart(product: Product) {
      const cartStore = useCartStore();
      const productWithQuantityAndFlavor = {
        ...product,
        flavor: this.selectedFlavor,
        quantity: this.quantity,
      };
      cartStore.addToCart(productWithQuantityAndFlavor);
      console.log('Product added to cart:', productWithQuantityAndFlavor);
      this.successMessage = true;
    },
    increaseQuantity() {
      if (this.quantity < 10) {
      this.quantity++;
      }
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
  },
});
</script>

<template>
  <div v-if="product" class="container mx-auto min-h-screen p-6">
    <h1 class="text-4xl font-semibold text-center mb-4">{{ product.title }}</h1>

    <div class="flex flex-col lg:flex-row items-start">
      <img :src="product.image" alt="Product Image" class="w-full lg:w-1/2 rounded-lg shadow-lg mb-6 lg:mb-0 lg:mr-8" />
      <div class="w-full lg:w-1/2">
        <p class="text-lg mb-4">{{ product.longDescription }}</p>
        <p class="text-sm text-gray-500 mb-2">Category: {{ product.category }}</p>
        
        <p class="text-xl font-semibold mb-4">Price: € {{ product.price }}</p>

        <div v-if="product.flavors && product.flavors.length > 0" class="mb-4">
          <label for="flavor-selector" class="block font-semibold mb-2">Choose a Flavor:</label>
          <select
            id="flavor-selector"
            class="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 dark:bg-gray-700 dark:text-gray-300"
            v-model="selectedFlavor"
          >
            <option v-for="flavor in product.flavors" :key="flavor" :value="flavor">
              {{ flavor }}
            </option>
          </select>
        </div>
        <div v-if="product.supplementFacts && product.supplementFacts.length > 0" class="mb-6">
          <p class="font-semibold mb-5">Supplement Facts:</p>
          <table class="table-auto w-full text-left">
            <thead>
              <tr class="bg-gray-200 border border-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xl">
                <th class="px-4 py-2">Nutrient</th>
                <th class="px-4 py-2">Amount</th>
                <th class="px-4 py-2">% Daily Value</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="fact in product.supplementFacts" :key="fact.nutrient" class="border border-gray-400 text-gray-80 text-lg hover:bg-gray-700">
                <td class="px-4 py-2">{{ fact.nutrient }}</td>
                <td class="px-4 py-2">{{ fact.amount }}</td>
                <td class="px-4 py-2">{{ fact.dailyValue }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex gap-5">
        <button @click="decreaseQuantity" class=" px-4 py-2">-</button>
        <p class="border text-2xl border-zinc-700 px-4 py-2">{{ quantity }}</p>
        <button @click="increaseQuantity" class=" px-4 py-2" >+</button>
        <button
          @click="addToCart(product)"
          class="bg-white text-black px-4 py-2 rounded-lg "
        >
          Add to Cart
        </button>
        </div>
        <div v-if="successMessage" class="text-emerald-400 mt-5 ">Product has been added to cart!</div>
      </div>
    </div>
  </div>

  <div v-else class="container mx-auto min-h-screen flex items-center justify-center dark:bg-black dark:text-white bg-white text-black">
    <p>Product not found.</p>
  </div>
</template>

<style scoped>
</style>









