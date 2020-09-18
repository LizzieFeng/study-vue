<template>
  <div class="container">
      <h3>我是AChild组件--{{msg}}</h3>
      <div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'AChild',
    data () {
        return {
        msg: 'Welcome to AChild'
        }
    },
    beforeCreate() {
       console.log('我是 AChild beforeCreate,this.msg=',this.msg);
    //    this.msg = 'beforeCreate';
    },

    created() {
       console.log('我是 AChild created,this.msg=',this.msg);
    //    this.msg = 'created';
    },
    beforeMount() {
       console.log('我是 AChild beforeMount,this.msg=',this.msg);
    //    this.msg = 'beforeMount';
    },
    mounted() {
       console.log('我是 AChild mounted,this.msg=',this.msg);
    //    this.msg = 'mounted';
    },

    beforeUpdate() {
       console.log('我是 AChild beforeUpdate,this.msg=',this.msg);
    //    this.msg = 'beforeUpdate';
    },
    updated() {
       console.log('我是 AChild updated,this.msg=',this.msg);
    //    this.msg = 'updated';
    },
    beforeDestroy() {
        console.log('我是 AChild beforeDestroy,this.msg=',this.msg);
    //    this.msg = 'beforeDestroy';
    },
    destroyed() {
        console.log('我是 AChild destroyed,this.msg=',this.msg);
    //    this.msg = 'destroyed';
    },
}
</script>

<style scoped>
    .container{
        background: yellow;
    }
</style>
