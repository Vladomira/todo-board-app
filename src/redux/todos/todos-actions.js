import { createAction } from '@reduxjs/toolkit'

// const fetchTodosRequest = createAction('todos/fetchTodosRequest')
// const fetchTodosSuccess = createAction('todos/fetchTodosSuccess')
// const fetchTodosError = createAction('todos/fetchTodosError')

// const fetchUsersRequest = createAction('users/fetchUsersRequest')
// const fetchUsersSuccess = createAction('users/fetchUsersSuccess')
// const fetchUsersError = createAction('users/fetchUsersError')

// const toggleCompletedRequest = createAction('todos/todoCompletedRequest')
// const toggleCompletedSuccess = createAction('todos/todoCompletedSuccess')
// const toggleCompletedError = createAction('todos/todoCompletedError')

const toggleCompleted = createAction('todos/toggleCompleted')
const fetchTodos = createAction('todos/fetchTodos')
const fetchUsers = createAction('users/fetchUsers')

const actions = {
  fetchTodos,
  fetchUsers,
  toggleCompleted,

  // fetchTodosRequest,
  // fetchTodosSuccess,
  // fetchTodosError,

  // fetchUsersRequest,
  // fetchUsersSuccess,
  // fetchUsersError,

  // toggleCompletedRequest,
  // toggleCompletedSuccess,
  // toggleCompletedError,
}

export default actions
