import { useSelector } from 'react-redux'
import { selectors } from '../../redux/todos'
import CardSetItem from './CardSetItem'
import Container from '../Container/Container'
import toAbbreviate from '../../functionsService/abbreviation'
import coloriseName from '../../functionsService/colorFunction'

export default function CardSet() {
  const inProgress = useSelector(selectors.inProgress)
  const users = useSelector(selectors.getUsers)
  return (
    <>
      <section className="section">
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
                  {/* {inProgress
                    ? inProgress.map(({ title, userId }) => {
                        return (
                          <>
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
                          </>
                        )
                      })
                    : null} */}
                  {/* // Lorem Ipsum is simply dummy text of the printing and
                  // typesetting industry. Lore... */}
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
      </section>
    </>
  )
}
