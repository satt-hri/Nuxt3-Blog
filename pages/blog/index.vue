<template>
    <div class="w-full max-w-3xl mx-auto py-8">
        <div class="text-xl  font-semibold"> Blog page</div>
        <div class=" relative flex justify-end mb-7">
            <nuxt-link to="/blog/create"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ">Add
                Post</nuxt-link>
        </div>
        <div v-for="blog in  data" class="relative w-full border rounded-lg p-5 mb-5" :key="blog.id">
            <div class="text-lg font-semibold mb-3">{{ blog.title }}</div>
            <p>{{ blog.content }}</p>
            <div class="flex justify-end pt-3">
                <button @click="delData(blog.id)"
                    class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-1 ">
                    Delete
                </button>
                <nuxt-link :to="`/blog/${blog.id}`"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ">
                    Edit
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { BolgModel } from "~~/server/model/blog";

const data = ref<BolgModel[]>([])

const fetchData = async () => {
    try {
        const result = await $fetch('/api/blog')
        data.value = result.data as BolgModel[];
    } catch (error) {

    }
}

const delData = async (id: number) => {
    try {
        await $fetch(`/api/blog/${id}`, {
            method: 'DELETE'
        })
        fetchData();
    } catch (error) {

    }
}

onMounted(() => {
    fetchData();
})

</script>

<style scoped></style>