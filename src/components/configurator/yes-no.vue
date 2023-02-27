<template>
  <div class="yes-no-configuree">
    <input :value="question.label" @input="handleUpdate" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useFormStore } from '@/stores/form.js'

const formStore = useFormStore()

const props = defineProps({
  question: {
    type: Object,
    required: true
  }
})

// const isEditing = ref(false);

const handleUpdate = (e) => {
  formStore.updateQuestion(props.question.id, {
    label: e.target.value
  })
}
</script>

<style scoped>
.yes-no-configuree {
  position: relative;
  display: block;
}

span {
  color: black;
}

input {
  width: 100%;
  padding: 0.5em;
  font-size: 1em;
}
</style>
