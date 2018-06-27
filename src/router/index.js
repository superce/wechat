import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Find from '@/components/Find/Find'
import MailList from '@/components/MailList/MailList'
import My from '@/components/My/My'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/maillist',
      name: 'MailList',
      component: MailList
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
