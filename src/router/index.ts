import Home from "@/views/Home.vue";
import NotFound from "@/error/NotFound.vue";
import { createWebHistory, createRouter } from "vue-router";
import Installer from "@/views/Installer.vue";
import Translation from "@/views/Translation.vue";

const routes = [
    {
        path: "/",
        alias: "/home",
        component: Home,
    },
    {
        path: "/installer",
        component: Installer,
    },
    {
        path: "/translation",
        component: Translation,
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
