import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: ()=>import('@/components/layouts/MuseumMainLayout.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: ()=>import('@/views/home/index.vue')
            },
            {
                path: '/contacts',
                component: ()=>import('@/views/contacts/index.vue')
            },
            {
                path: '/about-museum',
                component: ()=> import('@/views/about-museum/AboutMuseum.vue')
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router