<template>
  <div id="app">
    <ul class="left">
      <li v-for="(item,index) of menuList "
          :key=item.id
          @click.stop = "changeRouter(item,index)"
          class="item"
          :class="{'active':$route.name === item.routeName}">
          {{item.title}}
          <!-- 测试git push -->
      </li>
    </ul>
    <div class="main">
      <div>
        我现在的位置是emitMessage，是为了测试EmitOnChild组件点击按钮时，直接使用this.$on进行监听:{{emitMessage}}
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      emitMessage: '我是app.vue 的emitMessage初始值',
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
        },
        {
          id: 5,
          title: 'dialogUI组件',
          routeName: 'SelfDialog'
        },
        {
          id: 6,
          title: 'mixin',
          routeName: 'MixinComp'
        },
        {
          id: 7,
          title: 'elDialog',
          routeName: 'ElDialogStudy'
        },
        {
          id: 8,
          title: 'microMacro',
          routeName: 'MicroMacroStudy'
        },
        {
          id: 9,
          title: 'emitOn',
          routeName: 'EmitOnStudy'
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
  },
  created(){
    this.$on('notifyFatherMessage', (val) => {
      this.emitMessage = val;
    })
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
