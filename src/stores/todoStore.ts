// src/stores/todoStore.ts
import { defineStore } from 'pinia'

interface Todo {
  id: number
  name: string
  isDone: boolean
}

interface TodoState {
  todoList: Todo[]
}

export const useTodoStore = defineStore('todo', {
  state: (): TodoState => ({
    todoList: [
      { id: 1, name: 'Belajar HTML', isDone: false },
      { id: 2, name: 'Belajar CSS', isDone: false },
      { id: 3, name: 'Belajar JavaScript', isDone: false },
      { id: 4, name: 'Belajar PHP', isDone: false },
      { id: 5, name: 'Belajar Laravel', isDone: false },
    ]
  }),
  getters: {},
  actions: {
    toggleTodoStatus(id: number) {
      const todo = this.todoList.find(item => item.id === id)
      if (todo) {
        todo.isDone = !todo.isDone
      }
    },
    addTodo(name: string) {
      const newTodo: Todo = {
        id: this.todoList.length + 1,
        name,
        isDone: false,
      }
      this.todoList.push(newTodo)
    },
    removeTodo(id: number) {
      this.todoList = this.todoList.filter(item => item.id !== id)
    },
  },
})
