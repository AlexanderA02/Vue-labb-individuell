<script setup>
import { onMounted, ref, computed } from 'vue'
import axios from 'axios'
import Card from './Card.vue'

// props
const props = defineProps({
  difficulty: String,
})

// data/variabler
const dndClasses = ref(null)

// Methods/functions
const getClasses = () => {
  axios.get('dndClassesDB.json').then((response) => {
    dndClasses.value = response.data
  })
}

const filterOnDifficulty = computed(() => {
  return dndClasses.value.filter((dndClass) => {
    return dndClass.difficulty === props.difficulty
  })
})

// onMounted gör att getClasses körs när componenten HomeView.vue monteras i html:n.
onMounted(getClasses)
</script>

<template>
  <section v-if="dndClasses">
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
      v-for="dndClass in dndClasses"
      :key="dndClass.name"
      :name="dndClass.name"
      :difficulty="dndClass.difficulty"
      :description="dndClass.description"
      :recommended-stats="dndClass['recommended-stats']"
    ></Card>
  </section>
</template>

<style scoped></style>
