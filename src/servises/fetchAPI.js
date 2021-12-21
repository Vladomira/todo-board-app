import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

export const fetchTodos = () => {
  return axios.get('/todos').then((response) => response.data)
}
export const fetchUsers = () => {
  return axios.get('/users').then(({ data }) => data)
}
export const updateTodoCompleted = (todoId, update) => {
  return axios.patch(`/todos/${todoId}`, update).then(({ data }) => data)
}

// const BASE_URL = 'https://jsonplaceholder.typicode.com'
// async function fetchData(url = '', config = {}) {
//   const response = await fetch(url, config)
//   return response.ok
//     ? await response.json()
//     : Promise.reject(new Error('Not found'))
// }

// export function fetchTodosData() {
//   return fetchData(`${BASE_URL}/todos`)
// }
// export function fetchUsersData() {
//   return fetchData(`${BASE_URL}/users`)
// }
