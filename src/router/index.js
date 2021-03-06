import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sites from '@/components/Sites'
import Contact from '@/components/Contact'
import Skills from '@/components/Skills'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/sites',
      name: 'Sites',
      component: Sites
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    }
  ]
})
