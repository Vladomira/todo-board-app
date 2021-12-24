import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { fetchTodos, fetchUsers, toggleCompleted } from './todos-operations'
import changeCondition from '../functionsService'

const todos = createReducer([], {
  [fetchTodos.fulfilled]: (_, { payload }) => payload,
  [toggleCompleted.fulfilled]: (state, { payload }) => {
    return changeCondition(state, payload)
  },
})

const users = createReducer([], {
  [fetchUsers.fulfilled]: (_, { payload }) => payload,
})

export default combineReducers({
  users,
  todos,
})
// const loading = createReducer(false, {
//   [fetchTodos.pending]: () => true,
//   [fetchTodos.fulfilled]: () => false,
//   [fetchTodos.rejected]: () => false,

//   [fetchUsers.pending]: () => true,
//   [fetchUsers.fulfilled]: () => false,
//   [fetchUsers.rejected]: () => false,

//   [toggleCompleted.pending]: () => true,
//   [toggleCompleted.fulfilled]: () => false,
//   [toggleCompleted.rejected]: () => false,
// })
