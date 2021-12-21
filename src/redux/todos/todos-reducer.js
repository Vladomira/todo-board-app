import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import actions from './todos-actions'

const todos = createReducer([], {
  [actions.fetchTodosSuccess]: (_, { payload }) => payload,
  [actions.toggleCompleted]: (state, { payload }) =>
    forToggleCompleted(state, payload),
  // state.map((todo) => {
  //   return todo.id === payload
  //     ? { ...payload, completed: !todo.completed }
  //     : todo
  // }),
})

const toggleCompleted = createReducer('to do', {
  [actions.toggleCompletedRequest.pending]: () => true,
  [actions.toggleCompletedSuccess.fulfilled]: () => false,
  [actions.toggleCompletedError.rejected]: () => false,
})

const forToggleCompleted = (state, payload) => {
  state.map((todo) => {
    console.log(todo, 'todo')
    // return todo.id === payload
    //   ? { ...payload, completed: !todo.completed }
    //   : todo
  })
}
const users = createReducer([], {
  [actions.fetchUsersSuccess]: (_, { payload }) => payload,
})

const loading = createReducer(false, {
  [actions.fetchTodosRequest]: () => true,
  [actions.fetchTodosSuccess]: () => false,
  [actions.fetchTodosError]: () => false,

  [actions.fetchUsersRequest]: () => true,
  [actions.fetchUsersSuccess]: () => false,
  [actions.fetchUsersError]: () => false,

  [actions.todoCompletedRequest]: () => true,
  [actions.todoCompletedSuccess]: () => false,
  [actions.todoCompletedError]: () => false,
})

export default combineReducers({ users, todos, loading, toggleCompleted })
///
// const condition = createReducer('', {
//   // console.log(state)
//   'todos/toggleInprogress': (state, action) => [...state, action.payload],
//   'todos/toggleDone': (state, action) => [...state, action.payload],
// })

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ToDO:
//       return [
//         ...state,
//         // (state.todos.condition = 'To do')
//       ]

//     case types.InProgress:
//       return
//     case types.Done:
//       return

//     default:
//       return state
//   }
// }
// const condition = (state = '', action) => {
//   return state
// }
