import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home'
// import Login from '../views/login'
import MyCopy from '../views/button/myCopy'
import OrderListPart from '../views/orderListPart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/myCopy',
      name: 'myCopy',
      component: MyCopy
    },
    {
      path: '/orderListPart',
      name: 'orderListPart',
      component: OrderListPart
    }
  ]
})
