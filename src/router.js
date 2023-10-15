import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: () => import('@/components/MainPage')
    },
    {
        path: '/department/:id',
        name: 'DepartmentInfo',
        component: () => import('@/components/department/DepartmentInfo')
    },
    {
        path: '/board/list',
        name: 'simple-pagination',
        component: () => import('@/components/board/SimplePaginated.vue')
    },
    {
        path: '/member/login',
        name: 'MemberLogin',
        component: () => import('@/components/member/MemberLogin')
    },
    {
        path: '/department/add',
        name: 'MainRedirectPage',
        component: () => import('@/components/MainPage')
    },
    {
        path: '/admin',
        name: 'AdminMainPage',
        component: () => import('@/components/admin/AdminMain.vue')
    },
    {
        path: '/admin/member/add',
        name: 'MemberAddPage',
        component: () => import('@/components/admin/MemberAdd.vue')
    },
    {
        path: '/admin/member/update',
        name: 'MemberUpdatePage',
        component: () => import('@/components/admin/MemberUpdate.vue')
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
})