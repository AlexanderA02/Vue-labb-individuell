<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { RouterLink } from 'vue-router'

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

// onMounted gör att getClasses körs när componenten HomeView.vue monteras i html:n.
onMounted(getClasses)
</script>

<template>
  <p>Prop:{{ props.difficulty }}</p>
  <ul>
    <li v-for="dndClass in dndClasses">
      <!-- :to gör att allt efter = tolkas som JavaScript, annars tolkas det bara som en sträng. -->
      <RouterLink :to="`/roll-stats/${dndClass.name}`">
        {{ dndClass.name }}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped></style>
