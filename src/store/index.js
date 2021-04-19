import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

Vue.use(Vuex)

let db = new Localbase('db')
db.config.debug = false
let todoCollection = 'todoItems'

export default new Vuex.Store({
  state: {
      drawer: false,
      snackbar: {
        show: false,
        text: ''
      },
      todoItems: []
  },

  mutations: {
    flipDrawer(state) {
      state.drawer = !state.drawer
    },

    deleteTask(state, taskId) {
      let remainingTasks = state.todoItems.filter(f => f.id !== taskId)
      state.todoItems = remainingTasks
    },

    flipTaskCompleted(state, taskId) {
      let taskChanged = state.todoItems.filter(task => task.id === taskId)[0]
      taskChanged.isDone = !taskChanged.isDone
    },

    updateDueDate(state, { taskId, newDueDate }) {
      let taskChanged = state.todoItems.filter(task => task.id === taskId)[0]
      taskChanged.dueDate = newDueDate
    },

    setTasks(state, tasks) {
      state.todoItems = tasks
    },

    addTask(state, newTask) {
      state.todoItems.push(newTask)
    },

    openSnackBar(state, snackBarText) {
      state.snackbar.show = true
      state.snackbar.text = snackBarText
    },

    closeSnackBar(state) {
      state.snackbar.show = false
    }
  },

  actions: {
    async addTask({ commit }, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        isDone: false,
        dueDate: null
      }

      db.collection(todoCollection).add(newTask).then(() => {
        commit('addTask', newTask)
        commit('openSnackBar', 'New Task Successfully Added!')
      })
    },

    async deleteTask({ commit }, taskId) {
      db.collection(todoCollection).doc({ id: taskId }).delete().then(() => {
        commit('deleteTask', taskId)
        commit('openSnackBar', 'Task Successfully Removed!')
      })
    },

    async flipTaskCompleted({ state, commit }, taskId) {
      let task = state.todoItems.filter(task => task.id === taskId)[0]
      db.collection(todoCollection).doc({ id: taskId }).update({
        isDone: !task.isDone
      }).then(() => {
        commit('flipTaskCompleted', taskId)
      })
    },

    async updateDueDate({ commit }, payload) {
      let taskId = payload.taskId
      let newDueDate = payload.newDueDate

      db.collection(todoCollection).doc({ id: taskId }).update({
        dueDate: newDueDate
      }).then(() => {
        commit('updateDueDate', { taskId, newDueDate })
      })
    },

    async setAllTasks({ commit }) {
      db.collection(todoCollection).get().then(documents => {
        commit('setTasks', documents)
      })
    }
  },

  modules: {
  }
})
