import { createAction } from '@reduxjs/toolkit'

const toggleCompleted = createAction('todos/toggleCompleted')
const fetchTodos = createAction('todos/fetchTodos')
const fetchUsers = createAction('users/fetchUsers')

const actions = {
  fetchTodos,
  fetchUsers,
  toggleCompleted,
}

export default actions
