<script lang="ts">
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useDark } from '@vueuse/core';

interface LoginForm {
  email: string;
  password: string;
}
export default defineComponent({
  name: 'LoginView',
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const isDark = useDark({
      storageKey: 'vueuse-dark-mode',
      value: true, 
    });

    return {
      isDark,
    };
  },
  data(): LoginForm {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted with:', { email: this.email, password: this.password });
    },
  },
});
</script>

<template>
  <div
    class="flex mx-auto container min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8"
    :class="isDark ? 'bg-black text-white' : 'bg-white text-black'"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="flex justify-center mb-4">
        <FontAwesomeIcon class="text-4xl" :icon="['fas', 'dumbbell']" />
      </div>
      <h2 class="text-center text-2xl/9 font-bold tracking-tight">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleSubmit">
        <div>
          <label for="email" class="block text-sm/6 font-medium">Email address</label>
          <div class="mt-2">
            <input
              v-model="email"
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              required
              class="block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 sm:text-sm/6"
              :class="isDark ? 'bg-gray-800 text-white outline-gray-600' : 'text-gray-900 outline-gray-300'"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium">Password</label>
          </div>
          <div class="mt-2">
            <input
              v-model="password"
              type="password"
              name="password"
              id="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 sm:text-sm/6"
              :class="isDark ? 'bg-gray-800 text-white outline-gray-600' : 'text-gray-900 outline-gray-300'"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold shadow-sm"
            :class="isDark ? 'bg-white text-black' : 'bg-black text-white'"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
</style>

