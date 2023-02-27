<template>
  <div class="the-output">
    <h1>Output</h1>
    <p>{{ output }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useFormStore } from '@/stores/form.js';

const formStore = useFormStore();

const output = computed(() => JSON.stringify(formStore.form));

</script>

<style scoped>
.the-output {
  position: relative;
  max-width: 100%;
  border: 1px solid purple;
  word-break: break-all;
}

</style>
