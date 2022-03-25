<template>
    <div class="mb-4">
        <select
            v-model="search_category"
            class="block mt-1 w-full sm:w-1/4 rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
            <option value="" selected>Filter by category</option>
            <option
                v-for="category in categories"
                :value="category.id"
                :key="category.id"
            >
                {{ category.name }}
            </option>
        </select>
    </div>
    <div class="overflow-hidden overflow-x-auto bg-white border sm:rounded-lg">
        <div class="min-w-full align-middle">
            <table class="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <!-- <span
                                class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                >ID</span
                            > -->
                            <!-- justify-between -->
                            <div
                                class="flex flex-row items-center cursor-pointer"
                                @click="updateOrdering('id')"
                            >
                                <div
                                    class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                    :class="{
                                        'font-bold text-blue-600':
                                            orderColumn === 'id',
                                    }"
                                >
                                    ID
                                </div>
                                <div class="select-none text-sm ml-1">
                                    <span
                                        :class="{
                                            'text-blue-600':
                                                orderDirection === 'asc' &&
                                                orderColumn === 'id',
                                            hidden:
                                                orderDirection !== '' &&
                                                orderDirection !== 'asc' &&
                                                orderColumn === 'id',
                                            'opacity-25': orderColumn !== 'id',
                                        }"
                                        >&uarr;</span
                                    >
                                    <span
                                        :class="{
                                            'text-blue-600':
                                                orderDirection === 'desc' &&
                                                orderColumn === 'id',
                                            hidden:
                                                orderDirection !== '' &&
                                                orderDirection !== 'desc' &&
                                                orderColumn === 'id',
                                            'hidden opacity-25':
                                                orderColumn !== 'id',
                                        }"
                                        >&darr;</span
                                    >
                                </div>
                            </div>
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <span
                                class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                >Category</span
                            >
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <!-- <span
                                class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                >Title</span
                            > -->
                            <!-- justify-between -->
                            <div
                                class="flex flex-row items-center cursor-pointer"
                                @click="updateOrdering('title')"
                            >
                                <div
                                    class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                    :class="{
                                        'font-bold text-blue-600':
                                            orderColumn === 'title',
                                    }"
                                >
                                    Title
                                </div>
                                <div class="select-none text-sm ml-1">
                                    <span
                                        :class="{
                                            'text-blue-600':
                                                orderDirection === 'asc' &&
                                                orderColumn === 'title',
                                            hidden:
                                                orderDirection !== '' &&
                                                orderDirection !== 'asc' &&
                                                orderColumn === 'title',
                                            'opacity-25':
                                                orderColumn !== 'title',
                                        }"
                                        >&uarr;</span
                                    >
                                    <span
                                        :class="{
                                            'text-blue-600':
                                                orderDirection === 'desc' &&
                                                orderColumn === 'title',
                                            hidden:
                                                orderDirection !== '' &&
                                                orderDirection !== 'desc' &&
                                                orderColumn === 'title',
                                            'hidden opacity-25':
                                                orderColumn !== 'title',
                                        }"
                                        >&darr;</span
                                    >
                                </div>
                            </div>
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <span
                                class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                >Content</span
                            >
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <!-- <span
                                class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                >Created at</span
                            > -->
                            <!-- justify-between -->
                            <div
                                class="flex flex-row items-center cursor-pointer"
                                @click="updateOrdering('created_at')"
                            >
                                <div
                                    class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                    :class="{
                                        'font-bold text-blue-600':
                                            orderColumn === 'created_at',
                                    }"
                                >
                                    Created at
                                </div>
                                <div class="select-none text-sm ml-1">
                                    <span
                                        :class="{
                                            'text-blue-600':
                                                orderDirection === 'asc' &&
                                                orderColumn === 'created_at',
                                            hidden:
                                                orderDirection !== '' &&
                                                orderDirection !== 'asc' &&
                                                orderColumn === 'created_at',
                                            'opacity-25':
                                                orderColumn !== 'created_at',
                                        }"
                                        >&uarr;</span
                                    >
                                    <span
                                        :class="{
                                            'text-blue-600':
                                                orderDirection === 'desc' &&
                                                orderColumn === 'created_at',
                                            hidden:
                                                orderDirection !== '' &&
                                                orderDirection !== 'desc' &&
                                                orderColumn === 'created_at',
                                            'hidden opacity-25':
                                                orderColumn !== 'created_at',
                                        }"
                                        >&darr;</span
                                    >
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 divide-solid">
                    <!-- <tr v-for="post in posts"> -->
                    <!-- +data for laravel vue pagination -->
                    <tr v-for="post in posts.data" :key="post.id">
                        <td
                            class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                        >
                            {{ post.id }}
                        </td>
                        <td
                            class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                        >
                            {{ post.category }}
                        </td>
                        <td
                            class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                        >
                            {{ post.title }}
                        </td>
                        <td
                            class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                        >
                            {{ post.content }}
                        </td>
                        <td
                            class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                        >
                            {{ post.created_at }}
                        </td>
                    </tr>
                </tbody>
            </table>

            <Pagination
                :data="posts"
                @pagination-change-page="
                    (page) =>
                        getPosts(
                            page,
                            search_category,
                            orderColumn,
                            orderDirection
                        )
                "
            />
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import usePosts from "../../composables/posts";
import useCategories from "../../composables/categories";

export default {
    setup() {
        const search_category = ref("");
        // const search_id = ref("");
        // const search_title = ref("");
        // const search_content = ref("");
        // const search_global = ref("");
        const orderColumn = ref("created_at");
        const orderDirection = ref("desc");
        const { posts, getPosts } = usePosts();
        const { categories, getCategories } = useCategories();

        onMounted(() => {
            getPosts();
            getCategories();
        });

        watch(search_category, (current, previous) => {
            getPosts(1, current);
        });

        const updateOrdering = (column) => {
            orderColumn.value = column;
            orderDirection.value =
                orderDirection.value === "asc" ? "desc" : "asc";
            getPosts(
                1,
                search_category.value,
                orderColumn.value,
                orderDirection.value
            );
        };

        return {
            posts,
            getPosts,
            categories,
            search_category,
            orderColumn,
            orderDirection,
            updateOrdering,
        };
    },
};
</script>

<style>
.pagination {
    display: flex;
    justify-content: center;
    margin: 15px 0;
}
li.page-item {
    margin: 0 3px;
}
a.page-link {
    border-radius: 50%;
    display: block;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    place-items: center;
    transition: all 0.18s ease-in-out;
}
a.page-link:hover {
    background: rgba(0, 0, 0, 0.05);
    transform: scale(1.2);
}
.active a.page-link {
    background: rgba(0, 0, 0, 0.1);
}
a.page-link span.sr-only {
    display: none;
}
</style>
