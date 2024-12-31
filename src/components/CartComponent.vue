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
    removeFromCart(productId: string) {
      const cartStore = useCartStore();
      cartStore.removeFromCart(productId);
    },
  },
});
</script>

<template>
  <div class="container mx-auto min-h-screen p-6">
    <h1 class="text-4xl font-semibold text-center mb-6">Your Cart</h1>

    <div v-if="cart.length === 0" class="text-center">
      <p>Your cart is empty.</p>
    </div>

    <div v-else>
      <ul>
        <li
          v-for="item in cart"
          :key="item.id"
          class="flex justify-between items-center mb-4"
        >
          <div class="flex items-center">
            <img
              :src="item.image"
              alt="Product Image"
              class="w-16 h-16 object-cover rounded-lg shadow-lg"
            />
            <div class="ml-4">
              <h2 class="text-lg font-semibold">{{ item.title }}</h2>
              <p class="text-sm text-gray-500">Price: €{{ item.price }}</p>
              <p class="text-sm text-gray-500">Flavor: {{ item.flavor }}</p>
              <p class="text-sm">Quantity: {{ item.quantity }}</p>
            </div>
          </div>
          <button
            @click="removeFromCart(item.id)"
            class="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Remove
          </button>
        </li>
      </ul>

      <div class="mt-6 text-right">
        <p class="text-xl font-semibold">Total: €{{ total }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>




