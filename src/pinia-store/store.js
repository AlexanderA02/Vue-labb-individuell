import { defineStore } from 'pinia'

export const useDndClassesStore = defineStore('dndClasses', {
  actions: {
    getClasses() {
      axios.get('dndClassesDB.json').then((response) => {
        this.dndClasses = response.data
      })
    },
  },
  state: () => ({
    dndClasses: [],
  }),
})
