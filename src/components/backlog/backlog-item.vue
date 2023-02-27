<template>
  <div class="backlog-item" @dragstart="handleDragStart" draggable="true">
    <p>{{ label }}</p>
  </div>
</template>


<script>
export default {
  props: {
    label: String,
    type: String,
  },
  methods: {
    handleDragStart(e) {
      e.dataTransfer.setData('text/plain', JSON.stringify({ item: this.$props, from: 'backlog'}))
      e.dataTransfer.effectAllowed = 'move'
    },
  },
}
</script>

<style scoped>
.backlog-item {
  position: relative;
  display: block;
  padding: 1em;
  border: 1px solid green;




}
</style>
