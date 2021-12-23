import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { fetchTodos, fetchUsers, toggleCompleted } from './todos-operations'

const todos = createReducer([], {
  [fetchTodos.fulfilled]: (_, { payload }) => payload,
  [toggleCompleted.fulfilled]: (state, { payload }) => {
    return changeCondition(state, payload)
  },
})
const changeCondition = (state, payload) => {
  const newObj = state.map((todo) => {
    const { id, condition } = todo
    if (id === payload.id) {
      switch (condition) {
        case 'To do':
          return { ...todo, condition: 'In progress' }

        case 'In progress':
          return { ...todo, condition: 'Done' }

        default:
          return { ...todo }
      }
    } else return { ...todo }
  })
  return newObj
}
const users = createReducer([], {
  [fetchUsers.fulfilled]: (_, { payload }) => payload,
})

const loading = createReducer(false, {
  [fetchTodos.pending]: () => true,
  [fetchTodos.fulfilled]: () => false,
  [fetchTodos.rejected]: () => false,

  [fetchUsers.pending]: () => true,
  [fetchUsers.fulfilled]: () => false,
  [fetchUsers.rejected]: () => false,

  [toggleCompleted.pending]: () => true,
  [toggleCompleted.fulfilled]: () => false,
  [toggleCompleted.rejected]: () => false,
})

export default combineReducers({
  users,
  todos,
  loading,
})
