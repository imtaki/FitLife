<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'NotFoundView',
});
</script>

<template>
    <div class="container mx-auto min-h-screen flex flex-col items-center justify-center">
        <p class="text-4xl text-red-600 sm:text-4xl">404</p>
        <p class="mb-10 text-2xl sm:text-4xl ">Page not found</p>
        <router-link class="px-3 py-2 border bg-green-500" to="/">Go back to home</router-link>
    </div>
</template> 