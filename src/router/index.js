import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const router = new VueRouter({
    // routes: [{
    //         path: '/',
    //         name: '首页',
    //         meta: { title: '首页' },
    //         component: () =>
    //             import ('../views/home/HomePage.vue'),
    //     },
    //     {
    //         path: '/user',
    //         name: '用户页',
    //         component: () =>
    //             import ('../views/user/UserPage.vue')
    //     },
    //     {
    //         path: '/mall',
    //         name: '商品页',
    //         component: () =>
    //             import ('../views/mall/MallPage.vue')
    //     },
    //     {
    //         path: '/login',
    //         name: '登录页',
    //         component: () =>
    //             import ('../views/login/LoginPage.vue')

    //     },
    // ],
    routes: [{
            path: '/',
            component: () =>
                import ('../views/MainPage.vue'),
            children: [{
                path: '/',
                name: '首页',
                component: () =>
                    import ('../views/home/HomePage.vue'),
            }, {
                path: '/user',
                name: '用户页',
                component: () =>
                    import ('../views/user/UserPage.vue'),
            }, {
                path: '/mall',
                name: '商城页',
                component: () =>
                    import ('../views/mall/MallPage.vue'),
            }, ]
        },
        {
            path: '/login',
            name: '登录页',
            component: () =>
                import ('../views/login/LoginPage.vue')
        }
    ]


})


// router.beforeEach((to, from, next) => {
//     store.commit('getToken')
//     store.commit('getMenu') //防止reload后数据丢失
//     let token = store.state.user.token
//     if (!token && to.name !== 'login') {
//         next({ name: 'login' })
//     } else {
//         next()

//     }
//     //login登录页不做守卫，不然死循环
// })

export default router