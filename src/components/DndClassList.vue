<script setup>
import { onMounted, ref, computed } from 'vue'
import Card from './Card.vue'
import { useDndClassesStore } from '@/pinia-store/store'

// props
const props = defineProps({
  difficulty: String,
})

const dndClassesStore = useDndClassesStore()

// Methods/functions
const filterOnDifficulty = computed(() => {
  // .value ska inte användas här precis som att det inte ska användas i html:n
  return dndClassesStore.dndClasses.filter((dndClass) => {
    return dndClass.difficulty === props.difficulty
  })
})
</script>

<template>
  <section v-if="dndClassesStore.dndClasses">
    <!-- v-if gör att listan enbart renderas om dndClasses har ett värde annat än undefined, detta undviker en exeption. -->
    <!-- [] används runt recommended-stats eftersom att man vanligtvis inte kan ha bindestreck i JavaScript variabel namn. -->
    <Card
      v-if="difficulty !== 'all'"
      v-for="dndClass in filterOnDifficulty"
      :key="dndClass.id"
      :name="dndClass.name"
      :difficulty="dndClass.difficulty"
      :description="dndClass.description"
      :recommended-stats="dndClass['recommended-stats']"
    ></Card>
    <Card
      v-else
      v-for="dndClass in dndClassesStore.dndClasses"
      :key="dndClass.name"
      :name="dndClass.name"
      :difficulty="dndClass.difficulty"
      :description="dndClass.description"
      :recommended-stats="dndClass['recommended-stats']"
    ></Card>
  </section>
</template>

<style scoped></style>
