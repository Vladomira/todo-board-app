export const getUsers = (state) => state.data.users
export const getTodos = (state) => state.data.todos
export const isLoading = (state) => state.data.loading

export const inProgress = (state) =>
  state.data.todos.map((el) => {
    if (el.condition === 'In progress') {
      return { ...el }
    } else return
    // el.condition === 'In progress' ? { ...el } : null
    // console.log(result, 'result')
    // return result
  })

// сперебрать тудушки ы достать по стану
