import coloriseName from '../../functionsService/colorFunction'
import toAbbreviate from '../../functionsService/abbreviation'

export default function CardSetItem({ id, userId, users, title }) {
  return (
    <>
      <p
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
}
