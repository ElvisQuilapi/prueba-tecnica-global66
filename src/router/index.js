import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Pokemones from '@/pages/Pokemones'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pokemones',
      name: 'Pokemones',
      component: Pokemones
    }
  ]
})
