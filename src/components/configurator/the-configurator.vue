<template>
  <div class="the-configurator" @drop="handleDragEnd" @dragover="handleDragOver">
    <h1>Configurator</h1>

    <div class="configurator-items">
      <configurator-item v-for="question in questions" :key="question.id" :question="question" />
    </div>
  </div>
</template>

<script setup>
import ConfiguratorItem from './configurator-item.vue'

import { useFormStore } from '../../stores/form.js'
import { computed } from 'vue'

const formStore = useFormStore()

const questions = computed(() => formStore.questions)

const handleDragEnd = (e) => {
  const data = JSON.parse(e.dataTransfer.getData('text'))

  if (data.from === 'backlog') {
    // the drag started in the backlog (user added a new question)
    formStore.addQuestion(data.item)
  } else if (data.from === 'configurator') {
    // the drag started and ended in the configurator (user reordered questions)
    formStore.moveQuestion(data.item)
  }
}

const handleDragOver = (e) => {
  e.preventDefault()
}
</script>

<style scoped>
.the-configurator {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid cyan;
}

.configurator-items {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 0.5em;
}
</style>
