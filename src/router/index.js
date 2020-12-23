import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LifeCycle from '@/views/lifecycle/LifeCycle.vue'
import FilterComp from '@/views/filter/Filter.vue'
import VuexWatchComp from '@/views/vuexWatch/VuexWatch.vue'
import KeepAliveComp from '@/views/keepAlive/KeepAliveComp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/lifecycle',
      name: 'LifeCycle',
      component: LifeCycle
    },
    {
      path: '/filter',
      name: 'FilterComp',
      component: FilterComp
    },
    {
      path: '/vuexWatch',
      name: 'VuexWatchComp',
      component: VuexWatchComp
    },
    {
      path: '/keepAlive',
      name: 'KeepAliveComp',
      component: KeepAliveComp
    }
  ]
})
