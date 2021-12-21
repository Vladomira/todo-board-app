// import shortid from 'shortid'
import { createAction } from '@reduxjs/toolkit'

const fetchTodosRequest = createAction('todos/fetchTodosRequest')
const fetchTodosSuccess = createAction('todos/fetchTodosSuccess')
const fetchTodosError = createAction('todos/fetchTodosError')

const fetchUsersRequest = createAction('users/fetchUsersRequest')
const fetchUsersSuccess = createAction('users/fetchUsersSuccess')
const fetchUsersError = createAction('users/fetchUsersError')

const toggleCompletedRequest = createAction('todos/todoCompletedRequest')
const toggleCompletedSuccess = createAction('todos/todoCompletedSuccess')
const toggleCompletedError = createAction('todos/todoCompletedError')

const actions = {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosError,

  fetchUsersError,
  fetchUsersSuccess,
  fetchUsersRequest,

  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
}

export default actions
// const fetchTodos = createAction('todos/fetchToDos')
// const fetchUsers = createAction('users/fetchUsers')
// const toggleCompleted = createAction('users/toggleCompleted')
// const InititalCondition = createAction('todos/ToDo')
// const InProgress = createAction('todos/InProgress')
// const Done = createAction('todos/Done')
// fetchTodos,
// fetchUsers,
// toggleCompleted,
// InititalCondition,
// InProgress,
// Done,
// const changeCondition = createAction('todos/ChangeCondition')

// const actions = {
//   fetchTodos,
//   fetchUsers,
//   InititalCondition,
//   inProgress,
//   Done,
//   //   addInProgress,
// }
// export default actions

// export const initialCondition = (value) => ({
//   type: 'todo/To do',
//   payload: value,
// })

// export const inProgressCondition = (value) => ({
//   type: 'todo/In progress',
//   payload: value,
// })

// export const DoneCondition = (value) => ({
//   type: 'todo/Done',
//   payload: value,
// })
//////////
// const addTodo = (text) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generator(),
//     text,
//     completed: false,
//   },
// })

// const addInProgress = ({ userId, id, title, completed }) => ({
//   type: types.ToDO,
//   payload: {
//     userId,
//     id,
//     title,
//     completed,
//     // condition: types.InProgress,
//   },
// })

// tk:
// const addTodo = createAction(types.ADD, (userId, id, title) => {
//   return {
//     payload: {
//       userId,
//       id: shortid.generator(),
//       title,
//       completed: false,
//       // condition: types.InProgress,
//     },
//   }
// })

// tK:
