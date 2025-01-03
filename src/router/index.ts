import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ContactsView from '@/views/ContactView.vue'
import PreviewProduct from '@/components/PreviewProduct.vue'
import CartComponent from '@/components/CartComponent.vue'
import CategoryView from '@/views/CategoryView.vue'
import LoginView from '@/views/LoginView.vue'

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
      name: 'Products',
      component: ProductsView,
    },
    
    {
      path: '/products/:slug',
      name: 'PreviewProduct',
      component: PreviewProduct,
      props: true,
    },
    {
      path: '/products/category/:slug',
      name: 'category',
      component: CategoryView
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartComponent,
    },
    {
      path: '/contact',
      name: 'Kontakt',
      component: ContactsView,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    /*{
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: HomeView,
    }*/
    
  ],
})

export default router
