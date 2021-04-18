import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      drawer: false,
      openSnackBar: false,
      snackBarText: '',
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
    },

    openSnackBar(state, snackBarText) {
      state.openSnackBar = true
      state.snackBarText = snackBarText
    },

    closeSnackBar(state) {
      state.openSnackBar = false
    }
  },

  actions: {
    async addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle)
      commit('openSnackBar', 'New Task Successfully Added!')
    },

    async deleteTask({ commit }, taskId) {
      commit('deleteTask', taskId)
      commit('openSnackBar', 'Task Successfully Removed!')
    }
  },

  modules: {
  }
})
