import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'

Vue.use(Router);

let routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
        children: [
            {
                path: 'storeUserList',
                name: 'storeUserList',
                component: () => import('@/components/storeUserList'),
            },
            { path: '*', redirect: '/homecurriculum' }
        ]
    }
]

export default new Router({
    base: __dirname,
    mode: 'history',
    // linkActiveClass: 'active',
    routes: routes
})