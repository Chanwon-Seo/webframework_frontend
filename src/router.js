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
        path: '/department/intro/:id',
        name: 'DepartmentIntroPage',
        component: () => import('@/components/department/DepartmentIntro')
    },
    {
        path: '/board/list',
        name: 'simple-pagination',
        component: () => import('@/components/board/SimplePaginated')
    },
    {
        path: '/board/list/:name',
        name: 'simple-name-pagination',
        component: () => import('@/components/board/SimplePaginated')
    },
    {
        path: '/department/board/list/:name',
        name: 'department-simple-name-pagination',
        component: () => import('@/components/board/Department-SimplePaginated')
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
        component: () => import('@/components/admin/AdminMain')
    },
    {
        path: '/admin/member/add',
        name: 'MemberAddPage',
        component: () => import('@/components/admin/MemberAdd')
    },
    {
        path: '/admin/member/edit',
        name: 'MemberEditPage',
        component: () => import('@/components/admin/MemberEdit')
    },
    {
        path: '/admin/member/add/new',
        name: 'MemberAddNewPag',
        component: () => import('@/components/admin/MemberAddNew')
    },
    {
        path: '/admin/department/add',
        name: 'DepartmentAddPage',
        component: () => import('@/components/admin/DepartmentAdd')
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
