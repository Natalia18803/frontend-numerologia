import LoginView from '../views/LoginView.vue';
import MainLayout from '../layouts/MainLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: "/",
        component: MainLayout,
        children: [
            { path: "", component: LoginView }
        ]
    }
];


export const router = createRouter({
    history: createWebHistory(),
    routes,
});
