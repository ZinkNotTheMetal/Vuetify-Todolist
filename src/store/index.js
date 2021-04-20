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

    updateTask(state, { taskId, newTaskTitle, newDueDate }) {
      let taskChanged = state.todoItems.filter(task => task.id === taskId)[0]
      taskChanged.dueDate = newDueDate
      taskChanged.title = newTaskTitle
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
    // Add a new Todo Task
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

    // Remove an existing todo task
    async deleteTask({ commit }, taskId) {
      db.collection(todoCollection).doc({ id: taskId }).delete().then(() => {
        commit('deleteTask', taskId)
        commit('openSnackBar', 'Task Successfully Removed!')
      })
    },

    // Toggle whether a task is completed
    async flipTaskCompleted({ state, commit }, taskId) {
      let task = state.todoItems.filter(task => task.id === taskId)[0]
      db.collection(todoCollection).doc({ id: taskId }).update({
        isDone: !task.isDone
      }).then(() => {
        commit('flipTaskCompleted', taskId)
      })
    },

    // Set tasks from db to store
    async setAllTasks({ commit }) {
      db.collection(todoCollection).get().then(documents => {
        commit('setTasks', documents)
      })
    },

    // Update task from edit menu
    async updateTask({ commit }, payload) {
      let taskId = payload.id
      let newDueDate = payload.dueDate
      let newTaskTitle = payload.title

      db.collection(todoCollection).doc({ id: taskId }).update({
        dueDate: newDueDate,
        title: newTaskTitle
      }).then(() => {
        commit('updateTask', { taskId, newTaskTitle, newDueDate })
      })
    }
  },

  modules: {
  }
})
