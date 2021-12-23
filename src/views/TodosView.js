import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

// import TodosList from '../components/TodoList/TodosList'
import CardSet from '../components/Board/CardSet'
import toAbbreviate from '../functionsService/abbreviation'
import Container from '../components/Container/Container'
import coloriseName from '../functionsService/colorFunction'
import { operations, selectors } from '../redux/todos'

export default function TodosView() {
  const dispatch = useDispatch()
  const todos = useSelector(selectors.getTodos)
  const users = useSelector(selectors.getUsers)
  const isLoadingTodos = useSelector(selectors.isLoading)
  // const inProgress = useSelector(selectors.inProgress)
  // console.log(inProgress, 'inProgress')

  const onToggleCompleted = ({ id, condition }) => {
    dispatch(operations.toggleCompleted({ id, condition }))
  }
  useEffect(() => {
    dispatch(operations.fetchTodos())
    dispatch(operations.fetchUsers())
  }, [dispatch])

  return (
    <>
      <section className="section">
        {todos.length > 0 && (
          <Container>
            <p className="section__title">Ticket list</p>
            <ul className="tickets__list list">
              {todos.map((todo) => {
                const { id, userId, title, condition } = todo
                return (
                  <li key={id} className="tickets__item">
                    <div className="tickets__box">
                      <p
                        type="button"
                        className="tickets__user-label"
                        style={{
                          backgroundColor: coloriseName(userId),
                          borderRadius: 50,
                          padding: 24,
                        }}
                      >
                        {users.map(({ id, name }) =>
                          id === userId ? toAbbreviate(name) : null
                        )}
                      </p>
                      <p className="tickets__title">{title}</p>
                    </div>
                    <p
                      className="tickets__completed"
                      onClick={() => {
                        return onToggleCompleted({ id, condition })
                      }}
                    >
                      {condition}
                    </p>
                  </li>
                )
              })}
            </ul>
          </Container>
        )}
      </section>
      <CardSet />
      {/* <section className="section">
        <Container>
          <p className="section__title">Board</p>
          <ul className="board__list list">
            <li className="board__item">
              <p className="board__item-title">To do</p>

              <ul className="carsd__list">
                <li className="tickets__item">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lore...
                </li>
              </ul>
            </li>

            <li className="board__item">
              <p className="board__item-title">In progress</p>

              <ul className="carsd__list">
                <li className="tickets__item">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lore...
                </li>
              </ul>
            </li>

            <li className="board__item">
              <p className="board__item-title">Done</p>

              <ul className="carsd__list">
                <li className="tickets__item">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lore...
                </li>
              </ul>
            </li>
          </ul>
        </Container>
      </section> */}
      {isLoadingTodos && <h1>Загружаем...</h1>}
      {/* <TodosList /> */}
    </>
  )
}
