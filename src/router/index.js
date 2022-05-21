import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home'
// import Login from '../views/login'
import testRouter from '@/components/testRouter'
import OrderListAll from '../views/orderListAll'
import OrderListPart from '../views/orderListPart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: testRouter
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
