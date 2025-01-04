<script lang="ts">
import { defineComponent } from 'vue';
import { useDark } from '@vueuse/core';
import data from '@/products.json';
import reviews from '@/reviews.json';
import CardComponent from '@/components/CardComponent.vue';
import TestimonialComponent from '@/components/TestimonialComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    CardComponent,
    TestimonialComponent,
  },
  setup() {
    const isDark = useDark({
      storageKey: 'vueuse-dark-mode',
      value: true,
    });

    const products = data.products;
    const limitedProducts = products.slice(0, 4);
    const limitedTestimonial = reviews.slice(0, 3);

    return {
      isDark,
      limitedProducts,
      limitedTestimonial
    };
  },
});
</script>
<template>
  <main :class="isDark ? 'dark' : ''">
    <div class="container mx-auto min-h-screen">
      <section
        :class="isDark ? 'bg-black text-white' : 'bg-white text-black'"
        class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mt-40 mb-48"
      >
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1
            class="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl"
            :class="isDark ? ' text-white' : ' text-black'"
          >
            #1 Rated Supplement Store
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Enhance your workout and health with premium supplements. Explore our wide selection of products.
          </p>
          <a
            :class="isDark ? 'bg-white text-black' : 'bg-black text-white'"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg hover:bg-gray-700 transition duration-300 sm:text-center sm:justify-center"
          >
            Shop Now
          </a>
          <a
            :class="isDark ? 'text-white border-white' : 'text-black border-black'"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Learn More
          </a>
        </div>

        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="/landing.png"
            alt="Supplement Store"
            class="rounded-lg"
          />
        </div>
      </section>

      <section class="mb-32">
        <h1
          class="flex flex-row text-5xl items-center font-semibold justify-center mb-10"
          :class="isDark ? 'bg-black text-white' : 'bg-white text-black'"
        >
          Featured Products
        </h1>
        <div
          class="grid max-w-screen-xl place-self-center mx-auto gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
        <CardComponent
            v-for="(product, index) in limitedProducts"
            :key="index"
            :title="product.category"
            :description="product.description"
            :image="product.image"
            :isDark="isDark"
            :slug="`category/${product.slug}`"
            buttonText="See More"
          />
        </div>
      </section>

      <section class="mb-20 mt-32">
        <h1
          class="flex flex-row text-5xl items-center font-semibold justify-center mb-10"
          :class="isDark ? 'bg-black text-white' : 'bg-white text-black'"
        >
          What Our Customers Say
        </h1>
        <div
          class="grid max-w-screen-xl place-self-center mx-auto gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          <TestimonialComponent
            v-for="(testimonial, index) in limitedTestimonial"
            :key="index"
            :name="testimonial.name"
            :message="testimonial.message"
            :avatar="testimonial.avatar"
            :location="testimonial.location"
            :rating="testimonial.rating"
          />
        </div>
      </section>
      <section :class="isDark ? 'bg-black text-white' : 'bg-white text-black'" >
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-md sm:text-center">
                <h2 class="mb-4 text-sm tracking-tight font-extrabold  sm:text-4xl">Sign up for our newsletter</h2>
                <p class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl ">Stay up to date with new products, announcements and exclusive discounts feel free to sign up with your email.</p>
                <form>
                    <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                        <div class="relative w-full">
                            <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500" placeholder="Enter your email" type="email" id="email">
                        </div>
                        <div>
                            <button type="submit" class="py-3 px-5 w-full text-sm bg-white font-medium text-center text-white bgrounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-black">Subscribe</button>
                        </div>
                    </div>
                    <div class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer">We care about the protection of your data. <a href="#" class="font-medium text-primary-600 hover:underline">Read our Privacy Policy</a>.</div>
                </form>
            </div>
        </div>
    </section>
    </div>
  </main>
</template>

<style>
</style>

