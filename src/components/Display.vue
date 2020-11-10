<template>
  <div>
    <p>リスト</p>
    <ul>
      <Todo
        v-for="(todo, index) in todos"
        :id="todo.id"
        :key="index"
        :todo-text="todo.text"
        :todo-done="todo.done"
        @onChange="toggleTodo"
      ></Todo>
    </ul>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Todo from './Todo.vue'

export default {
  components: { Todo },
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    ...mapActions(['toggleTodo'])
  },
}
</script>

<style>
</style>
