<template>
  <div>
    <h1>Todo list</h1>
    <Display></Display>
    <TextForm></TextForm>
  </div>
</template>

<script>
import Display from './components/Display.vue'
import TextForm from './components/TextForm.vue'

export default {
  components: {
    Display: Display,
    TextForm: TextForm
  }
}
</script>
