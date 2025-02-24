import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RollStatsPage from '@/views/RollStatsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      // ? efter dndClass innebär att det inte behövs finnas en dndClass för att path:en ska matchas
      path: '/roll-stats/:dndClass?',
      name: 'roll-stats',
      component: RollStatsPage,
    },
  ],
})

// Använd som referens när du skapar dina egna router.
/* {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    }, */

export default router
