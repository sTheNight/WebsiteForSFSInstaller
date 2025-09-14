import Home from "@/views/Home.vue";
import NotFound from "@/error/NotFound.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        alias: '/home',
        component: Home
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})