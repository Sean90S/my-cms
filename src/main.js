import Vue from 'vue'
import App from './App.vue'
import router from './router'   // 路由
import Axios  from 'axios'      // axios
Vue.prototype.$axios = Axios;

import './assets/js/ui'; // 导航样式
import './assets/js/icon'       // icon ( svg )

import './assets/css/reset.css' // 样式重置
import './assets/css/ui.css'    // 导航样式
import './assets/css/icon.css'  // icon

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
