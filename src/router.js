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
                component: ()=> import('@/views/about-pages/AboutMuseum.vue')
            },
            {
                path: '/about-person',
                component: ()=>import('@/views/about-pages/AboutPerson.vue')
            },
            {
                path: '/about-title',
                component: ()=>import('@/views/about-pages/AboutTitlePage.vue')
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router