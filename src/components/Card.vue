<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  name: String,
  difficulty: String,
  description: String,
  recommendedStats: Array,
})
</script>

<template>
  <section>
    <RouterLink :to="`/roll-stats/${props.name}`">
      {{ props.name }}
    </RouterLink>
    <p>Difficulty: {{ props.difficulty }}</p>
    <p>Description: {{ props.description }}</p>
    <p v-for="stat in props.recommendedStats">Recommended primary stat: {{ stat }}</p>
  </section>
</template>

<style scoped>
section {
  background-color: black;
  color: white;
  border: solid 2px red;
  margin: 1em;
}
</style>
