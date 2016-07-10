<template>
  <li v-text="todoText" :class="{'isDone': todoDone }"></li>
</template>

<script>
export default {
  props: [
    'todoText',
    'todoDone'
  ]
}
</script>

<style>
.isDone {
  text-decoration: line-through;
}
</style>