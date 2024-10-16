
import { defineStore } from 'pinia'

interface CounterState {
  count: number
  name: string
}

export const useCounterStore = defineStore('count', {
  state: (): CounterState => ({
    count: 4,
    name: 'Zuldi'
  }),
  getters: {
    doubleCount(state): number {
      return state.count * 2
    },
  },
  actions: {
    decrement() {
      this.count--
    },
    increment() {
      this.count++
    },
  },
})
