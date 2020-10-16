import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LifeCycle from '@/views/lifecycle/LifeCycle.vue'
import FilterComp from '@/views/filter/Filter.vue'
import VuexWatchComp from '@/views/vuexWatch/VuexWatch.vue'

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
    }
  ]
})
