import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as dataAPI from '../../servises/fetchAPI'
import actions from './todos-actions'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

export const fetchTodos = createAsyncThunk(
  actions.fetchTodos,
  async (_, { rejectWithValue }) => {
    try {
      const todos = await dataAPI.fetchTodos()

      const modifyData = addCondition(todos)
      // console.log(modifyData, 'modifyData')
      return modifyData
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
const addCondition = (data) => {
  const newPayload = data.map(({ completed, id, title, userId }) => {
    const newObj = { completed, id, title, userId, condition: 'To do' }
    return newObj
  })
  return [...newPayload]
}
export const fetchUsers = createAsyncThunk(
  actions.fetchUsers,
  async (_, { rejectWithValue }) => {
    try {
      const users = await dataAPI.fetchUsers()
      // console.log(users, 'users')
      return users
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
export const toggleCompleted = createAsyncThunk(
  actions.toggleCompleted,

  async ({ id, condition }) => {
    const newCompleted = await dataAPI.updateTodoCompleted(id, {
      condition: condition,
    })
    // console.log(newCompleted, 'newCompleted')
    return newCompleted
  }
)

// export const fetchTodos = () => async (dispatch) => {
//   dispatch(actions.fetchTodosRequest())

//   try {
//     const todos = await dataAPI.fetchTodos()
//     dispatch(actions.fetchTodosSuccess(todos))
//   } catch (error) {
//     dispatch(actions.fetchTodosError(error.message))
//   }
// }

// export const fetchUsers = () => async (dispatch) => {
//   dispatch(actions.fetchUsersRequest())
//   try {
//     const users = await dataAPI.fetchUsers()
//     dispatch(actions.fetchUsersSuccess(users))
//   } catch (error) {
//     dispatch(actions.fetchUsersError(error.message))
//   }
// }
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
// export const toggleCompleted =
//   ({ todoId, completed }) =>
//   async (dispatch) => {
//     const update = { completed }
//     dispatch(actions.toggleCompletedRequest(todoId))
//     //   axios.patch(`/todos/${todoId}`, update)
//     try {
//       const data = await dataAPI.updateTodoCompleted()
//       dispatch(actions.toggleCompletedSuccess(data))
//     } catch (error) {
//       dispatch(actions.toggleCompletedError(error))
//     }
//     // axios
//     //   .patch(`/todos/${todoId}`, update)
//     //   .then(({ data }) => dispatch(actions.todoCompletedSuccess(data)))
//     //   .catch((error) => dispatch(actions.todoCompletedError(error)))
//   }
