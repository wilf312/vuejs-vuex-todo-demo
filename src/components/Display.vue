<template>
  <div>
    <p>リスト</p>
    <ul>
      <todo v-for="todo in todoList" :todo-text="todo.text" :todo-done="todo.done"></todo>
      <!-- <li :class="{'isDone': todo.done}">{{todo.text}}</li> -->
    </ul>
  </div>
</template>

<script>
import { getTodos } from '../store/getters'

import Todo from './Todo.vue'

export default {
  components: { Todo },
  vuex: {
    getters: {
      // note that you're passing the function itself, and not the value 'getCount()'
      todoList: getTodos
    }
  }
}
</script>


<style>
</style>