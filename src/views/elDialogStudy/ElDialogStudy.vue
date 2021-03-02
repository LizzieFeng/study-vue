<template>
  <div class="ElDialogStudy">
      <h3>el-dialog 组件学习</h3>
      <div>
            <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
            <div>
                dialogVisible:{{dialogVisible}}
            </div>
            <div>
                <h4>
                    1、两个dialog 追加body正确的使用方式
                </h4>
                <code>
                    <!--  -->
            <!-- <div  class="eldialogcontainer1"
                    v-if="dialogVisible">
                <el-dialog
                    title="提示1"
                    :visible.sync="dialogVisible"
                    custom-class= "ElDialogStudy-dialog1"
                    :modal="false"
                    :append-to-body="true">
                        <span>这是一段信息1</span>
                </el-dialog>
            </div>
            
            <div class="eldialogcontainer2"
                    v-if="dialogVisible">
                <el-dialog
                    title="提示2"
                    :visible.sync="dialogVisible"
                    custom-class= "ElDialogStudy-dialog2"
                    :modal="false"
                    :append-to-body="true">
                        <span>这是一段信息2</span>
                </el-dialog>
            </div> -->
                </code>
            </div>

            <div>
                <h4>
                    2、在当前位置进行两个dialog进行追加 正确的使用方式
                </h4>
                <code>
 <!-- -->
                <!-- <el-dialog
                    v-if="dialogVisible"
                    title="提示1"
                    :visible.sync="dialogVisible"
                    custom-class= "ElDialogStudy-dialog1"
                    :modal="false">
                        <span>这是一段信息1</span>
                </el-dialog>
 
                <el-dialog
                    title="提示2"
                    v-if="dialogVisible"
                    :visible.sync="dialogVisible"
                    custom-class= "ElDialogStudy-dialog2"
                    :modal="false">
                        <span>这是一段信息2</span>
                </el-dialog> -->
                </code>
            </div>

<!-- 
            <div>
                <h4>
                    3、同一个位置
                </h4>
                <code> -->
 <!-- -->
                <!-- <el-dialog
                    v-if="dialogVisible"
                    title="提示1"
                    :visible.sync="dialogVisible"
                    custom-class= "ElDialogStudy-dialog1"
                    :modal="false">
                        <span>这是一段信息1</span>
                </el-dialog>
 
                <el-dialog
                    title="提示2"
                    v-if="dialogVisible"
                    :visible.sync="dialogVisible"
                    custom-class= "ElDialogStudy-dialog2"
                    :modal="false">
                        <span>这是一段信息2</span>
                </el-dialog> -->
                <!-- </code>
            </div> -->
           
            
      </div>
  </div>
</template>

<script>
export default {
    name: 'ElDialogStudy',
    components:{
    },
    data () {
        return {
            dialogVisible: false
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>

<style scoped>
    .container{
        background: yellow;
    }
</style>

<style>
    .el-dialog__wrapper{
        position: absolute;
        pointer-events: none;
    }
    .ElDialogStudy-dialog1{
        pointer-events: all;
        outline: 1px solid red;
        position: absolute;
        left: 0px;
        width: 200px;
        height: 200px;
    }
    .ElDialogStudy-dialog2{
        pointer-events: all;
        outline: 1px solid greenyellow;
        position: absolute;
        right: 0px;
        width: 200px;
        height: 200px;
    }
</style>
