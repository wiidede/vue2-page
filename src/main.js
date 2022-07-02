import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueCompositionApi)
Vue.use(ElementUI);

new Vue(App).$mount('#app')
