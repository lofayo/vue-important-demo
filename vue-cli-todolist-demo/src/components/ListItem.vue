<template>
  <li class="item">{{content}}/{{index}} 
    <button @click='deleteItem'>delete</button>
  </li>  
</template>

<script>
  // 每个组件都是个vue实例，所以下面导出就是个配置vue选项的vue实例
export default {
  // 1、接收来自父组件的自定义属性，可以直接在template直接插值{{content}}、
  //也可以组件方法里this.index引用
  props:['content','index'],
  methods:{
    deleteItem() {
      // alert(this.index)
      // 2、子组件向父组件发射事件
      this.$emit('deleteItem',this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item {
    color: red;
  }
</style>
