import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './index.config'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  // mode: 'history',
  base: __dirname,
  routes
})

export default router
