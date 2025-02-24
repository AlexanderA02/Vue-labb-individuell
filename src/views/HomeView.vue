<script setup>
import { ref } from 'vue'
import DndClassList from '@/components/DndClassList.vue'
import HeroComp from '@/components/HeroComp.vue'
import FilterComp from '@/components/FilterComp.vue'

const difficultySelected = ref('all')
</script>

<template>
  <main class="min-h-screen">
    <HeroComp></HeroComp>
    <FilterComp
      @difficulty-selected="(difficulty) => (difficultySelected = difficulty)"
    ></FilterComp>
    <DndClassList :difficulty="difficultySelected"></DndClassList>
  </main>
</template>
