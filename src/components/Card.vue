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
  <section
    class="m-3 min-h-60 max-w-120 rounded-xl border-2 border-amber-400 bg-red-950 p-5 text-white"
  >
    <RouterLink :to="`/roll-stats/${props.name}`" class="text-2xl font-bold hover:underline">
      {{ props.name }}
    </RouterLink>
    <p><span class="font-semibold">Difficulty:</span> {{ props.difficulty }}</p>
    <p><span class="font-semibold">Description:</span> {{ props.description }}</p>
    <p v-for="stat in props.recommendedStats">
      <span class="font-semibold">Recommended stat:</span> {{ stat }}
    </p>
  </section>
</template>
