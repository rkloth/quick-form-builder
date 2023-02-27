<template>
  <div class="backlog">
    <h1>Backlog</h1>

    <BacklogItem label="Checkboxes" type="checkboxes"></BacklogItem>
    <BacklogItem label="Yes/No" type='boolean'></BacklogItem>
  </div>
</template>

<script setup>
import BacklogItem from './backlog-item.vue'
</script>

<style>

</style>
