// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import TodoList from './TodoList'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // 定义挂载点
  el: '#app',
  // 注册组件
  components: { TodoList },
  // 该模板引用组件，并且替换HTML中的挂载元素
  template: '<TodoList/>'
})
