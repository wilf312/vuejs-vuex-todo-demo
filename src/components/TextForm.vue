<template>
  <div>
    <h2>todo 追加</h2>
    <input
      type="text"
      autofocus
      autocomplete="off"
      @keyup.enter="tryAddTodo"
    >
  </div>
</template>

<script>
import { addTodo } from '../store/actions'

export default {
  vuex: {
    actions: {
      addTodo: addTodo
    }
  },
  methods: {
    tryAddTodo (e) {
      const text = e.target.value
      console.log(text)
      if (text.trim()) {
        this.addTodo(text)
      }
      e.target.value = ''
    }
  }
}
</script>
