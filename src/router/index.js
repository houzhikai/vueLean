import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home'
// import Login from '../views/login'
import OrderListAll from '../views/orderListAll'
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
      path: '/orderListAll',
      name: 'orderListAll',
      component: OrderListAll
    },
    {
      path: '/orderListPart',
      name: 'orderListPart',
      component: OrderListPart
    }
  ]
})
