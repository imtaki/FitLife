import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ContactsView from '@/views/ContactView.vue'
import CartView from '@/views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'Produkty',
      component: ProductsView,
    },
    {
      path: '/contact',
      name: 'Kontakt',
      component: ContactsView,
    },
    {
      path: '/cart',
      name: 'Kosik',
      component: CartView,
    },
  ],
})

export default router
