<template>
  <li :class="{'isDone': todoDone }">
    <label>
      <input
        type="checkbox"
        :checked="todoDone"
        @change="onChange"
      >
      {{ todoText }}
    </label>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    todoText: {
      type: String,
      required: true
    },
    todoDone: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onChange () {
      this.$emit('onChange', {
        id: this.id,
        done: !this.todoDone
      })
    }
  }
}
</script>

<style>
.isDone {
  text-decoration: line-through;
}
</style>
