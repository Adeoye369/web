import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores/auth.js'
import { storeToRefs } from 'pinia'
import LoginPage from '@/views/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
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
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
  ],
})

router.beforeEach((to, _) => {
  const { isLoggedIn } = storeToRefs(useAuthStore())

  if (to.meta.requiresAuth && !isLoggedIn.value) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      name: 'LoginPage',
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    }
  }
})

export default router
