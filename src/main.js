import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { Button, Select, Container, Main, Header, Aside, Menu, Submenu, MenuItem, MenuItemGroup, Radio, Icon, Dropdown, DropdownItem, Row, Col, Card, Popover, Popconfirm, Progress, Divider, Tag, Input, Table, TableColumn, Breadcrumb, BreadcrumbItem, Form, FormItem, Option, Switch, DatePicker, Dialog, Pagination, Loading, MessageBox, Message } from 'element-ui'
import App from './App.vue';
import router from './router/index'
import axios from 'axios'
import '../API/mock'
import echarts from 'echarts'
import store from './store.js'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter);
Vue.use(Button);
Vue.use(Select);
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Radio);
Vue.use(Icon);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Popover);
Vue.use(Popconfirm);
Vue.use(Progress);
Vue.use(Divider);
Vue.use(Tag);
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Option);
Vue.use(Switch);
Vue.use(DatePicker);
Vue.use(Dialog);
Vue.use(Pagination);
Vue.use(Loading);
Vue.component(MessageBox.name, MessageBox)
Vue.component(Message.name, Message)
Vue.prototype.$axios = axios //不是插件，只能在原型上写方法
Vue.config.productionTip = false
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
Vue.prototype.$echarts = echarts
require('../API/axios')
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
})