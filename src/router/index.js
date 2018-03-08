import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import Product from '@/pages/product/product'
import Contact from '@/pages/contact/contact'
import About from '@/pages/about/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
