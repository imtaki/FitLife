<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '@/stores/cartStore';

export default defineComponent({
  name: 'CartComponent',
  computed: {
    cart() {
      const cartStore = useCartStore();
      const cartItems = cartStore.getCart;
      return cartItems;
    },
    total() {
      const cartStore = useCartStore();
      return cartStore.getTotal;
    },
  },
  methods: {
    removeFromCart(productId: string, flavor: string) {
      const cartStore = useCartStore();
      cartStore.removeFromCart(productId, flavor);
    },
    decreaseQuantity(productId: string, flavor: string) {
      const cartStore = useCartStore();
      cartStore.decreaseItemQuantity(productId, flavor);
    },
    increaseQuantity(productId: string) {
      const cartStore = useCartStore();
      cartStore.increaseItemQuantity(productId);
    },
  },
});
</script>
<template>
  <div class="container mx-auto min-h-screen p-3 sm:p-6">
    <h1 class="text-2xl sm:text-4xl font-semibold text-center mb-4 sm:mb-6">Your Cart</h1>

    <div v-if="cart.length === 0" class="text-center">
      <p>Your cart is empty.</p>
    </div>

    <div v-else>
      <ul>
        <li
          v-for="item in cart"
          :key="item.id"
          class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6"
        >
          <div class="flex flex-col sm:flex-row items-start sm:items-center w-full">
            <img
              :src="item.image"
              alt="Product Image" 
              class="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-3 sm:mt-0 sm:ml-4 w-full">
              <h2 class="text-base sm:text-lg font-semibold">{{ item.title }}</h2>
              <p class="text-sm text-gray-500">Price: €{{ item.price }}</p>
              <p class="text-sm text-gray-500">Flavor: {{ item.flavor }}</p>
              <p class="text-sm">Quantity: {{ item.quantity }}</p>
            </div>
          </div>
          
          <div class="flex gap-2 sm:gap-3 mt-3 sm:mt-0 w-full sm:w-auto justify-end">
            <button 
              class="bg-orange-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base" 
              @click="increaseQuantity(item.id)"
            >
              +
            </button>
            <button
              @click="removeFromCart(item.id, item.flavor)"
              class="bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base"
            >
              Remove
            </button>
            <button 
              class="bg-orange-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base" 
              @click="decreaseQuantity(item.id, item.flavor)"
            >
              -
            </button>
          </div>
        </li>
      </ul>

      <div class="mt-4 sm:mt-6 text-right">
        <p class="text-lg sm:text-xl font-semibold">Total: €{{ total }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>




