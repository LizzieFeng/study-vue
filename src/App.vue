<template>
  <div id="app">
    <ul class="left">
      <li v-for="(item,index) of menuList "
          :key=item.id
          @click.stop = "changeRouter(item,index)"
          class="item"
          :class="{'active':$route.name === item.routeName}">
          {{item.title}}
      </li>
    </ul>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menuList: [
        {
          id: 0,
          title: 'hello',
          routeName: 'HelloWorld'
        },
        {
          id: 1,
          title: '生命周期',
          routeName: 'LifeCycle'
        },
        {
          id: 2,
          title: 'Filter',
          routeName: 'FilterComp'
        },
        {
          id: 3,
          title: 'VuexWatch',
          routeName: 'VuexWatchComp'
        },
        {
          id: 4,
          title: 'keep-alive',
          routeName: 'KeepAliveComp'
        }
      ],
    }
  },
  methods:{
    changeRouter(menu, index) {
      this.$router.push({
        name: menu.routeName
      })
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
<style scoped>
  .left {
    width: 200px;
    float:left;
  }
  .left .item:hover,
  .left .active{
    color:red;
  }
  .main {
    width: calc(100% - 202px);
    float: right;
  }
</style>
