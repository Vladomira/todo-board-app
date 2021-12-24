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

    return newCompleted
  }
)
