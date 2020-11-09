<template>
  <li
    :class="{'isDone': todoDone }"
    v-text="todoText"
  ></li>
</template>

<script>
export default {
  props: {
    todoText: {
      type: String,
      required: true
    },
    todoDone: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.isDone {
  text-decoration: line-through;
}
</style>
