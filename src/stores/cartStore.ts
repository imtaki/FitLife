import { defineStore } from 'pinia';

type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  flavor: string;
  quantity: number;
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
        const existingProduct = this.cart.find((item) => item.id === product.id && item.flavor === product.flavor);
        if (existingProduct) {
          existingProduct.quantity += product.quantity;
        } else {
          this.cart.push({ ...product});
        }
        this.saveToLocalStorage();
    },
    removeFromCart(productId: string) {
      this.cart = this.cart.filter(item => item.id !== productId);
      this.saveToLocalStorage();
      
    },
    decreaseItemQuantity(productId: string) {
      const existingItem = this.cart.find((item) => item.id === productId);
      if (existingItem) {
          existingItem.quantity--;
          if (existingItem.quantity === 0) {
              this.removeFromCart(productId);
          }
      }
    },
    increaseItemQuantity(productId: string) {
      const existingItem = this.cart.find((item) => item.id === productId);
      if (existingItem) {
          if (existingItem.quantity < 10) {
              existingItem.quantity++;
          }
      }
    },
    saveToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  },
});