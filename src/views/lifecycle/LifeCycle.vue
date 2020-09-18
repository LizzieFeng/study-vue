<template>
  <div>
      <h1>
          进行生命周期学习
      </h1>
      <ul>
          <li>
              <h2>
                  测试父子组件的生命周期关系（看控制台输出）
              </h2>
              <div class="testGroupContainer">
                  <div>
                      <button @click.stop="addAparent(true)">加载AParent组件</button>
                      <button @click.stop="addAparent(false)">卸载AParent组件</button>
                  </div>
                  <div>
                      <Aparent v-if="AparentFlag"></Aparent>
                  </div>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
import Aparent from '../lifecycle/children/AParent'
export default {
    name: 'LifeCycle',
    components:{
        Aparent
    },
    data () {
        return {
        AparentFlag: false
        }
    },
    methods:{
        addAparent(existFlag) {
            this.AparentFlag = !! existFlag;
        }
    }
}
</script>

<style scoped>
    li {
        
    }
    .testGroupContainer{
        /* border: 2px solid red; */
        background: #f3f3f3;
    }
</style>
