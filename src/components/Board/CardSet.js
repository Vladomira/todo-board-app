import { useSelector } from 'react-redux'
import { selectors } from '../../redux/todos'
import CardSetItem from './CardSetItem'
import Container from '../Container/Container'

export default function CardSet() {
  const todos = useSelector(selectors.getTodos)
  const users = useSelector(selectors.getUsers)

  return (
    <>
      <section className="section">
        <Container>
          <p className="section__title board__title">Board</p>
          <ul className="board__list list">
            <li className="board__item">
              <p className="board__item-title">To do</p>

              <ul className="cards-set__list list">
                {todos.map(({ id, title, userId, condition }) => {
                  return condition === 'To do' ? (
                    <li className="cards-set__item" key={id}>
                      <CardSetItem
                        id={id}
                        userId={userId}
                        users={users}
                        title={title}
                      />
                    </li>
                  ) : null
                })}
              </ul>
            </li>

            <li className="board__item">
              <p className="board__item-title">In progress</p>

              <ul className="cards-set__list  list">
                {todos.map(({ id, title, userId, condition }) => {
                  return condition === 'In progress' ? (
                    <li className="cards-set__item" key={id}>
                      <CardSetItem
                        id={id}
                        userId={userId}
                        users={users}
                        title={title}
                      />
                    </li>
                  ) : null
                })}
              </ul>
            </li>

            <li className="board__item">
              <p className="board__item-title">Done</p>

              <ul className="cards-set__list ">
                {todos.map(({ id, title, userId, condition }) => {
                  return condition === 'Done' ? (
                    <li className="cards-set__item" key={id}>
                      <CardSetItem
                        id={id}
                        userId={userId}
                        users={users}
                        title={title}
                      />
                    </li>
                  ) : null
                })}
              </ul>
            </li>
          </ul>
        </Container>
      </section>
    </>
  )
}
