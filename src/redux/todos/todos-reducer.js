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
