<template>
  <li
    :class="{'isDone': todoDone }"
    v-text="todoText"
  />
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
