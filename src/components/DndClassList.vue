<script setup>
import { computed } from 'vue'
import CardComp from './CardComp.vue'
import { useDndClassesStore } from '@/pinia-store/store'

// props
const props = defineProps({
  difficulty: { type: String, default: '' },
})

// Data/variables
const dndClassesStore = useDndClassesStore()

// Methods/functions
const filterOnDifficulty = computed(() => {
  return dndClassesStore.dndClasses.filter((dndClass) => {
    return dndClass.difficulty === props.difficulty
  })
})
</script>

<template>
  <!-- v-if gör att sektionen enbart renderas om dndClasses har ett värde annat än undefined, detta undviker en exeption. -->
  <section
    v-if="dndClassesStore.dndClasses"
    class="grid grid-cols-1 place-items-center lg:grid-cols-2"
  >
    <!-- [] används runt recommended-stats eftersom att man vanligtvis inte kan ha bindestreck i JavaScript variabel namn. -->
    <CardComp
      v-for="dndClass in filterOnDifficulty"
      v-if="difficulty !== 'all'"
      :key="dndClass.id"
      :name="dndClass.name"
      :difficulty="dndClass.difficulty"
      :description="dndClass.description"
      :recommended-stats="dndClass['recommended-stats']"
    ></CardComp>
    <CardComp
      v-for="dndClass in dndClassesStore.dndClasses"
      v-else
      :key="dndClass.name"
      :name="dndClass.name"
      :difficulty="dndClass.difficulty"
      :description="dndClass.description"
      :recommended-stats="dndClass['recommended-stats']"
    ></CardComp>
  </section>
</template>
