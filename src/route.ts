import { createRouter, createWebHistory } from 'vue-router';
import List from './components/Elements/List.vue';

const routes = [
    {
        path: '/elements',
        component: List
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
