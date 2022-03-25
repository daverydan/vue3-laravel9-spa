require('./bootstrap');

import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import PostsIndex from './components/Posts/Index'
import LaravelVuePagination from 'laravel-vue-pagination';

const routes = [
  { path: '/', component: PostsIndex }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp({})
// app.component('posts-index', PostsIndex)
app.use(router)
app.component('Pagination', LaravelVuePagination)
app.mount('#app')
