import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import TodosList from '../components/TodoList/TodosList'
import CardSet from '../components/Board/CardSet'

import { operations, selectors } from '../redux/todos'

export default function TodosView() {
  const dispatch = useDispatch()

  const todos = useSelector(selectors.getTodos)

  const isLoading = useSelector(selectors.isLoading)

  useEffect(() => {
    dispatch(operations.fetchTodos())
    dispatch(operations.fetchUsers())
  }, [dispatch])

  return (
    <>
      {todos.length > 0 ? (
        <>
          <TodosList />
          <CardSet />
        </>
      ) : (
        <p className="section__title">Loading...</p>
      )}
    </>
  )
}
