import { createRouter, createWebHistory } from 'vue-router';
import List from './components/Elements/List.vue';
import Details from './components/Elements/Detail.vue'
const routes = [
    {
        path: '/elements',
        component: List
    },
    {
        path: '/elements/:elementId(\\d+)',
        component: Details
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
