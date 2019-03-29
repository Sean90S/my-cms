import Vue from 'vue'
import App from './App.vue'
import router from './router'   // 路由
import store  from './store/'
import Axios  from 'axios'      // axios
import AmazeVue from 'amaze-vue';
import 'amaze-vue/dist/amaze-vue.css';
Vue.prototype.$axios = Axios;

import './assets/js/ui'; // 导航样式
import './assets/js/icon'       // icon ( svg )

import './assets/css/reset.css' // 样式重置
import './assets/css/ui.css'    // 导航样式
import './assets/css/icon.css'  // icon

Vue.config.productionTip = false
Vue.use(AmazeVue)
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
