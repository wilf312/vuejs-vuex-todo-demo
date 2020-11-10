<template>
  <div>
    <h2>todo 追加</h2>
    <input
      type="text"
      name="add_todo"
      autofocus
      autocomplete="off"
      @keyup.enter="tryAddTodo"
    >
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  methods: {
    ...mapActions(['addTodo']),
    tryAddTodo (e) {
      const text = e.target.value
      if (text.trim()) {
        this.addTodo(text)
      }
      e.target.value = ''
    }
  }
}
</script>
