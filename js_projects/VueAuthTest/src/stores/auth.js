import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  // set login info
  const isLoggedIn = ref(false)

  // set Getters, Computed...

  // set actions (functions/methods)

  return { isLoggedIn }
})
