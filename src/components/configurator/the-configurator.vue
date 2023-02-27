<template>
  <div class="the-configurator" @drop="handleDragEnd" @dragover="handleDragOver">
    <h1>Configurator</h1>
  </div>
</template>

<script setup>
import { useFormStore } from '../../stores/form.js';

const formStore = useFormStore();

const handleDragEnd = (e) => {
  const data = JSON.parse(e.dataTransfer.getData('text'));

  if (data.from === 'backlog') {
    // the drag started in the backlog (user added a new question)
    formStore.addQuestion(data.item);
  } else if (data.from === 'configurator') {
    // the drag started and ended in the configurator (user reordered questions)
    formStore.moveQuestion(data.item);
  }
}

const handleDragOver = (e) => {
  e.preventDefault();

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

</style>
