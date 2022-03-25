<template>
    <form @submit.prevent="storePost(post)">
        <!-- Title -->
        <div>
            <label
                for="post-title"
                class="block font-medium text-sm text-gray-700"
            >
                Title
            </label>
            <input
                v-model="post.title"
                id="post-title"
                type="text"
                :class="validationErrors?.title ? 'border-red-600' : ''"
                class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <div class="text-red-600 mt-1 text-sm">
                <div
                    v-for="message in validationErrors?.title"
                    :key="message.title"
                >
                    {{ message }}
                </div>
            </div>
        </div>

        <!-- Content -->
        <div class="mt-4">
            <label
                for="post-content"
                class="block font-medium text-sm text-gray-700"
            >
                Content
            </label>
            <textarea
                v-model="post.content"
                id="post-content"
                :class="validationErrors?.content ? 'border-red-600' : ''"
                class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            ></textarea>
            <div class="text-red-600 mt-1 text-sm">
                <div
                    v-for="message in validationErrors?.content"
                    :key="message.content"
                >
                    {{ message }}
                </div>
            </div>
        </div>

        <!-- Category -->
        <div class="mt-4">
            <label
                for="post-category"
                class="block font-medium text-sm text-gray-700"
            >
                Category
            </label>
            <select
                v-model="post.category_id"
                id="post-category"
                :class="validationErrors?.category_id ? 'border-red-600' : ''"
                class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
                <option value="" selected>-- Choose category --</option>
                <option
                    v-for="category in categories"
                    :value="category.id"
                    :key="category.id"
                >
                    {{ category.name }}
                </option>
            </select>
            <div class="text-red-600 mt-1 text-sm">
                <div
                    v-for="message in validationErrors?.category_id"
                    :key="message.category_id"
                >
                    {{ message }}
                </div>
            </div>
        </div>

        <!-- Buttons -->
        <div class="mt-4">
            <button
                :disabled="isLoading"
                class="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded disabled:opacity-75 disabled:cursor-not-allowed"
            >
                <div
                    v-show="isLoading"
                    class="inline-block animate-spin w-4 h-4 mr-2 border-t-2 border-t-white border-r-2 border-r-white border-b-2 border-b-white border-l-2 border-l-blue-600 rounded-full"
                ></div>
                <span v-if="isLoading">Processing...</span>
                <span v-else>Save</span>
            </button>
        </div>
    </form>
</template>

<script>
import { onMounted, reactive } from "vue";
import useCategories from "../../composables/categories";
import usePosts from "../../composables/posts";
export default {
    setup() {
        const post = reactive({
            title: "",
            content: "",
            category_id: "",
        });
        const { categories, getCategories } = useCategories();
        const { storePost, validationErrors, isLoading } = usePosts();
        onMounted(() => {
            getCategories();
        });
        return { categories, post, storePost, validationErrors, isLoading };
    },
    // For testing purposes only before creating storePost() in composables/posts
    // methods: {
    //     test() {
    //         console.log("Submitted");
    //     },
    // },
};
</script>
