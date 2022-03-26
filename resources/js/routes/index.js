import { createRouter, createWebHistory } from "vue-router";

import AuthenticatedLayout from "../layouts/Authenticated";
import GuestLayout from "../layouts/Guest";

import Login from "../components/Login";
import PostsIndex from "../components/Posts/Index";
import PostsCreate from "../components/Posts/Create";
import PostsEdit from "../components/Posts/Edit";

const routes = [
    {
        component: GuestLayout,
        children: [
            {
                path: "/login",
                name: "login",
                component: Login,
            },
        ],
    },
    {
        component: AuthenticatedLayout,
        children: [
            {
                path: "/posts",
                name: "posts.index",
                component: PostsIndex,
                meta: { title: "Posts" },
            },
            {
                path: "/posts/create",
                name: "posts.create",
                component: PostsCreate,
                meta: { title: "Create Post" },
            },
            {
                path: "/posts/edit/:id",
                name: "posts.edit",
                component: PostsEdit,
                meta: { title: "Edit Post" },
            },
        ],
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
