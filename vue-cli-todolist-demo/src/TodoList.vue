<template>
  <div id="app1">
    <div>
      <input class="item" type="text" v-model='inputValue'>
      <button @click='addItem'>add</button>
    </div>
    <ul>
      <!-- 3、引用组件（父组件向子组件传递自定义属性） -->
      <!-- 父组件接收子组件发射的事件，为何？
        因为真正的数据存于父组件vue实例中，所以必须在父组件中处理数据 -->
      <list-item @deleteItem='deleteItem'
        v-for='(list,index) of lists' 
        :content='list' 
        :key='index' 
        :index='index'>
        </list-item>
    </ul>
  </div>
</template>

<script>
  // 1、导入组件的模板
import ListItem1 from './components/ListItem'

export default {
// 2、注册组件
  components:{
    'list-item':ListItem1
  },
  created() {
    console.log(this)
  },
  data() {
    return {
      inputValue: '',
      lists:[]
    }
  },
  methods: {
    addItem() {
      this.lists.unshift(this.inputValue)
      this.inputValue = ''
    },
    deleteItem(index){
      this.lists.splice(index,1)
    }
  }
}
</script>

<style>
/*即使不同组件使用相同样式选择器：
子组件样式覆盖父组件样式、可以各自维护当前组件样式*/
.item {
    color: green;
  }
</style>
