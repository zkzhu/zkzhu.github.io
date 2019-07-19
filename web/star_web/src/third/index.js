import Vue from 'vue'
import 'babel-polyfill'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/reset.css'
import '@/assets/styles/index.scss'
import 'font-awesome/css/font-awesome.css'
import axios from 'axios'
import { restUrl as baseUrl } from '../config'

// element-ui
Vue.use(ElementUI, {
  size: 'small'
});

// axiox
axios.defaults.withCredentials = true;
axios.defaults.baseURL = baseUrl;

Vue.prototype.$axios = axios;
