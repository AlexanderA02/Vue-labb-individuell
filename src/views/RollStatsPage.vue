<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useDndClassesStore } from '@/pinia-store/store'
import Dice from '@/components/Dice.vue'

// useRoute() returnerar ett Objekt som representerar url:en. Detta är användbart då jag behöver få tillgång till params:en i url:en för att veta vilken länk som användaren har klickat på.
const route = useRoute()
const dndClassesStore = useDndClassesStore()
const sum = ref(0)
</script>

<template>
  <h1 v-if="route.params.dndClass">Roll your stats here {{ route.params.dndClass }}.</h1>
  <h1 v-else>Roll your stats here champion!</h1>
  <ul v-for="dndClass in dndClassesStore.dndClasses">
    <li>{{ dndClass.name }}</li>
  </ul>
  <Dice @dice-rolled="(result) => (sum += result)"></Dice>
  <p>{{ sum }}</p>
</template>

<style></style>
