<template>
    <div class="w-full max-w-3xl mx-auto py-8">
        <div class="text-xl  font-semibold"> Home page</div>
        <div class=" relative flex justify-end mb-7">
            <nuxt-link to="/blog"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ">GO  TO Blog Page</nuxt-link>
        </div>
    </div>
</template>
<script setup lang="ts">
useHead({
    title: "李テスト"
})


</script>