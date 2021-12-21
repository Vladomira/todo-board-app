import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as dataAPI from '../../servises/fetchAPI'
import actions from './todos-actions'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

export const fetchTodos = () => async (dispatch) => {
  dispatch(actions.fetchTodosRequest())

  try {
    const todos = await dataAPI.fetchTodos()
    dispatch(actions.fetchTodosSuccess(todos))
  } catch (error) {
    dispatch(actions.fetchTodosError(error.message))
  }
}

export const fetchUsers = () => async (dispatch) => {
  dispatch(actions.fetchUsersRequest())
  try {
    const users = await dataAPI.fetchUsers()
    dispatch(actions.fetchUsersSuccess(users))
  } catch (error) {
    dispatch(actions.fetchUsersError(error.message))
  }
}
// export const todoCompleted = createAsyncThunk(
//   actions.todoCompletedRequest,

//   async (todoId, completed) => {
//     if (completed === false) {
//       return completed === 'in progress'
//     }
//     if (completed === 'in progress') {
//       return completed === 'done'
//     }
//     const todo = await dataAPI.updateTodoCompleted(todoId)

//     return todo
//   }
// )

//правильно
export const toggleCompleted =
  ({ todoId, completed }) =>
  async (dispatch) => {
    const update = { completed }
    dispatch(actions.toggleCompletedRequest(todoId))
    //   axios.patch(`/todos/${todoId}`, update)
    try {
      const data = await dataAPI.updateTodoCompleted()
      dispatch(actions.toggleCompletedSuccess(data))
    } catch (error) {
      dispatch(actions.toggleCompletedError(error))
    }
    // axios
    //   .patch(`/todos/${todoId}`, update)
    //   .then(({ data }) => dispatch(actions.todoCompletedSuccess(data)))
    //   .catch((error) => dispatch(actions.todoCompletedError(error)))
  }

// export const fetchTodos = createAsyncThunk(
//   'todos/fetchTodos',
//   async (_, { rejectWithValue }) => {
//     try {
//       const todos = await dataAPI.fetchTodos()
//       return todos.data
//     } catch (error) {
//       return rejectWithValue(error)
//     }
//   }
// )
// export const fetchUsers = createAsyncThunk(
//   'todos/fetchUsers',
//   async (_, { rejectWithValue }) => {
//     try {
//       const users = await dataAPI.fetchUsers()
//       return users
//     } catch (error) {
//       return rejectWithValue(error)
//     }
//   }
// )
// export const todoCompleted = createAsyncThunk(
//   'todos/todoCompleted',
//   async ({ todoId, completed }) => {
//     const completed = await dataAPI.fetchUsers(`/todos/${todoId}`, update)
//     return completed
//   }
// )
