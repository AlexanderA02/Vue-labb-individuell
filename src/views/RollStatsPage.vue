<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useDndClassesStore } from '@/pinia-store/store'
import Dice from '@/components/Dice.vue'

// useRoute() returnerar ett Objekt som representerar url:en. Detta är användbart då jag behöver få tillgång till params:en i url:en för att veta vilken länk som användaren har klickat på.
const route = useRoute()
const dndClassesStore = useDndClassesStore()
const totalScore = ref(0)
const dndStats = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']
const recommendedStats = ref([])
</script>

<template>
  <main class="flex min-h-125 flex-col items-center pt-16">
    <h2 v-if="route.params.dndClass" class="text-3xl font-bold">
      Roll your stats here {{ route.params.dndClass }}.
    </h2>
    <h2 v-else class="text-3xl font-bold">Roll your stats here champion!</h2>
    <p class="mt-4 mb-6">Click the boxes to roll a stat.</p>

    <ul class="grid grid-cols-3 text-center">
      <li v-for="stat in dndStats">
        <h3 class="font-semibold">{{ stat }}</h3>
        <Dice @dice-rolled="(result) => (totalScore += result)"></Dice>
      </li>
    </ul>

    <h3>
      Your total stat-score is: <u>{{ totalScore }}</u>
    </h3>
    <p></p>
  </main>
</template>
