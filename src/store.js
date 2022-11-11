import Vue from 'vue';
import Vuex from 'vuex';
import Cookie from 'js-cookie'
Vue.use(Vuex)
const mutations = {
    MenuCollapse(state) {
        state.isCollapse = !state.isCollapse //折叠侧边栏方法
    },
    //以下为处理Token方法
    // setToken(state, val) {
    //     state.token = val,
    //         Cookie.set('token', val) //存放Token，名/值形式存储
    // },
    // clearToken(state) {
    //     state.token = ''
    //     Cookie.remove('token')
    // },
    // getToken(state) {
    //     state.token = Cookie.get('token')
    // },

    // //以下为处理菜单方法
    // setMenu(state, val) {
    //     state.menu = val //添加menu到state中
    //     Cookie.set('menu', JSON.stringify(val))
    //         //添加menu到Cookie中，对象转化为字符串
    // },
    // clearMenu(state) {
    //     state.menu = [],
    //         Cookie.remove('menu')
    // },
    // addMenu(state, router) {
    //     if (Cookie.get('menu')) {
    //         let menu = JSON.parse(Cookie.get('menu'))
    //         state.menu = menu
    //         let currentMenu = [{
    //             path: '/',
    //             component: () =>
    //                 import ('./views/home/HomePage.vue')
    //         }]
    //     }

    // }
}
const state = {
    isCollapse: false, //默认折叠为false，即展开侧边栏
    sum: 666,
    menu: [{
            path: "/",
            name: "main",
            label: "首页",
            icon: "s-home",
            url: "Home/Home",
        },
        {
            path: "/mall",
            name: "mall",
            label: "商品",
            icon: "video-play",
            url: "MallManage/MallManage",
        },
        {
            path: "/user",
            name: "user",
            label: "用户管理",
            icon: "user",
            url: "UserManage/UserManage",
        },


        {
            path: "/login",
            name: 'login',
            label: '个人中心',
            icon: 'user',
            url: ""
        }
    ],
    token: '',
    // menu: []
}

const store = new Vuex.Store({
    mutations,
    state
})

export default store