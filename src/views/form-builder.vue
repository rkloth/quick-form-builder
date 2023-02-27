<template>
  <div class="form-builder">
    <Backlog />
    <Configurator />
    <Output />
  </div>
</template>

<script setup>
import Backlog from '../components/backlog/the-backlog.vue'
import Configurator from '../components/configurator/the-configurator.vue'
import Output from '../components/output/the-output.vue'
</script>

<style scoped>
.form-builder {
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;

  gap: 1em;
  max-width: 100vw;
}

</style>
