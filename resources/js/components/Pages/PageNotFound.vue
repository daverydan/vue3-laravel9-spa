<template>
    <div class="h-screen w-screen bg-red-300">
        <div class="flex justify-center items-center h-full">
            <div class="text-center">
                <strong class="text-7xl text-red-600">404</strong>
                <p class="text-red-600">Page Not Found</p>
                <router-link
                    :to="{ name: 'posts.index' }"
                    class="text-white underline mt-3 block hover:opacity-70 transition duration-200 ease-in-out"
                    >View Posts</router-link
                >
            </div>
        </div>
    </div>
</template>
