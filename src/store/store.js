import Vue from 'vue'
import Vuex from 'vuex'

// Make vue aware of Vuex
Vue.use(Vuex)

// Create an object to hold the initial state when
// the app starts up
const state = {
  // When the app starts, count is set to 0
  count: 2,
  todos: [
    {
      id: 1,
      text: 'first ',
      done: true
    }
  ]
}

// Create an object storing various mutations. We will write the mutation
const mutations = {
  // A mutation receives the current state as the first argument
  // You can make any modifications you want inside this function
  INCREMENT (state, amount) {
    state.count = state.count + amount
  },
  DECREMENT (state, amount) {
    state.count = state.count - amount
  },
  ADD_TODO (state, text) {
    const todo = {
      id: state.count,
      text: text,
      done: false
    }
    state.todos.unshift(todo)
    state.count = state.count + 1
  },
  TOGGLE_TODO (state, payload) {
    state.todos = state.todos.map(d => {
      if (payload.id === d.id) {
        return {
          ...d,
          done: payload.done
        }
      } else {
        return d
      }
    })
  }
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state,
  mutations,
  getters: {
    getTodos (state) {
      return state.todos
    }
  },

  actions: {
    addTodo (ctx, payload) {
      ctx.commit('ADD_TODO', payload)
    },
    toggleTodo(ctx, payload) {
      ctx.commit('TOGGLE_TODO', payload)
    }
  }
})
