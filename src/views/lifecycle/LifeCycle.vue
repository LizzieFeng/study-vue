<template>
  <div>
      <h1>
          进行生命周期学习
      </h1>
      <ul>
          <li>
              <h2>
                  1、测试父子组件的生命周期关系（看控制台输出）
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
          <li>
              <h2>
                  2、测试兄弟组件的生命周期关系（看控制台输出）
              </h2>
              <div class="testGroupContainer">
                  <div>
                      <button @click.stop="changeBro('Aparent')">加载AParent组件</button>
                      <button @click.stop="changeBro('Bparent')">加载BParent组件</button>
                      <button @click.stop="changeBro('')">卸载组件</button>
                  </div>
                  <div>
                      <component :is="broCompName"></component>
                  </div>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
import Aparent from '@/components/AParent';
import Bparent from '@/components/BParent';
export default {
    name: 'LifeCycle',
    components:{
        Aparent,
        Bparent
    },
    data () {
        return {
            AparentFlag: false,
            broCompName: '',
        }
    },
    methods:{
        addAparent(existFlag) {
            this.AparentFlag = !! existFlag;
        },

        changeBro(broCompName) {
            this.broCompName = broCompName;
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
