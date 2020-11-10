<template>
  <div>
    <p>リスト</p>
    <ul>
      <Todo
        v-for="(todo, index) in todos"
        :key="index"
        :todo-text="todo.text"
        :todo-done="todo.done"
      ></Todo>
    </ul>
  </div>
</template>

<script>
import { getTodos } from '../store/getters'
import {mapState} from 'vuex'
import Todo from './Todo.vue'

export default {
  components: { Todo },
  computed: {
    ...mapState(['todos'])
  }
}
</script>

<style>
</style>
