// import { createStore, applyMiddleware, combineReducers } from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
// import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import todosReducer from './todos/todos-reducer'

// const rootReducer = combineReducers({
//   todos: todosReducer,
// })
const midleware = [...getDefaultMiddleware(), logger]
// const midleware = (getDefaultMiddleware) =>
//   getDefaultMiddleware({
//     serializableCheck: false,
//   })
// const store = createStore(rootReducer, composeWithDevTools())

const store = configureStore({
  reducer: {
    data: todosReducer,
  },
  midleware,
  devTools: process.env.NODE_ENV === 'development',
})
export default store
