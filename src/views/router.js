import { createRouter, createWebHashHistory } from 'vue-router';
import CountryPage from '../components/Country/CountryPage.vue';
import Home from "@/components/Home.vue";

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/country/:id',
        name: 'CountryPage',
        component: CountryPage,
        props: true,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/home',
    }
];

const router = createRouter({
    history: createWebHashHistory('/World-Ranks-Page/'),
    routes,
});

export default router;