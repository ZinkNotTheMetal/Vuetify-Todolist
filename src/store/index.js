import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      drawer: false,
      todoItems: [
        { id: 1, title: 'wake up', isDone: false },
        { id: 2, title: 'peel bananas', isDone: false },
        { id: 3, title: 'eat bananas', isDone: false },
        { id: 4, title: 'poo bananas', isDone: false },
      ]
  },

  mutations: {
    flipDrawer(state) {
      state.drawer = !state.drawer
    },

    deleteTask(state, taskId) {
      let remainingTasks = state.todoItems.filter(f => f.id !== taskId)
      state.todoItems = remainingTasks
    },

    addTask(state, newTaskTitle) {
      state.todoItems.push(
        { id: Date.now(), title: newTaskTitle, isDone: false }
      )
    }
  },

  actions: {
    async addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle)
    }
  },

  modules: {
  }
})
