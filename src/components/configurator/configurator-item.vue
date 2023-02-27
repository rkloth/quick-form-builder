<template>
  <div class="configurator-item" @dragstart="handleDragStart" draggable="true">
    <yes-no v-if="question.type === 'boolean'" :question="question" />
  </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
import YesNo from './yes-no.vue'

const props = defineProps({
  question: {
    type: Object,
    required: true
  }
})

onMounted(() => {
  console.log('configurator-item mounted', props.question)
})

const handleDragStart = (e) => {
  e.dataTransfer.setData('text/plain', JSON.stringify({ item: props.question, from: 'configurator' }))
  e.dataTransfer.effectAllowed = 'move'
}

</script>

<style scoped>
.configurator-item {
  position: relative;
  display: block;
  padding: 1em;

  background-color: rgba(black, 0.2);
}
</style>
