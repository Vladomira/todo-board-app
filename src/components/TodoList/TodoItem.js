import { useSelector, useDispatch } from 'react-redux'
import coloriseName from '../../functionsService/colorFunction'
import toAbbreviate from '../../functionsService/abbreviation'
import { operations, selectors } from '../../redux/todos'

export default function TodoItem() {
  const dispatch = useDispatch()
  const todos = useSelector(selectors.getTodos)
  const users = useSelector(selectors.getUsers)
  const onToggleCompleted = ({ id, condition }) => {
    dispatch(operations.toggleCompleted({ id, condition }))
  }

  return (
    <>
      {todos.map((todo) => {
        const { id, userId, title, condition } = todo
        return (
          <li key={id} className="tickets__item">
            <div className="tickets__box">
              <p
                className="tickets__user-label"
                style={{
                  backgroundColor: coloriseName(userId),
                  borderRadius: 50,
                  padding: 24,
                }}
              >
                {users &&
                  users.map(({ id, name }) =>
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
    </>
  )
}
