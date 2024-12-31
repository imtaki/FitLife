import { defineStore } from 'pinia';

type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
};

type CartItem = Product & {
  quantity: number;
};

export const useCartStore = defineStore('CartStore', {
  state: () => ({
    cart: JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[],
    products: [] as Product[],
  }),

  getters: {
    getProducts(state) {
      return state.products;
    },
    getCart(state) {
      return state.cart;
    },
    getTotal(state) {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },

  actions: {
    addToCart(product: Product) {
        const existingProduct = this.cart.find((item) => item.id === product.id);
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          this.cart.push({ ...product, quantity: 1 });
        }
        this.saveToLocalStorage();
    },
    removeFromCart(productId: string) {
      const productIndex = this.cart.findIndex((item) => item.id === productId);
      if (productIndex !== -1) {
        this.cart.splice(productIndex, 1);
        this.saveToLocalStorage();
      }
    },
    saveToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  },
});