import axios from 'axios'

const state = {
  todos: []
}

const getters = {
  allTodos: (state) => state.todos
}

const actions = {
  fetchTodos: async ({ commit }) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')

    commit('setTodos', res.data)
  },
  addTodo: async ({ commit }, title) => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/todos?_limit=5', { title, completed: false })

    commit('newTodo', res.data)
  },
  delTodo: ({ commit }, id) => {
    commit('delTodo', id)
  },
  filterTodos: ({ commit }, title) => {
    commit('filterTodos', title)
  }
}

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => (state.todos.unshift(todo)),
  delTodo: (state, id) => (state.todos = state.todos.filter(e => e.id !== id)),
  filterTodos: (state, title) => (state.todos = state.todos.filter(e => e.title === title))
}

export default {
  state, getters, actions, mutations
}
