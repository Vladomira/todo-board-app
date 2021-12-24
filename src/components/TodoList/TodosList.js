import Container from '../Container/Container'
import TodoItem from './TodoItem'

export default function TodosList() {
  return (
    <>
      <section className="section">
        <Container>
          <p className="section__title">Ticket list</p>
          <ul className="tickets__list list">
            <TodoItem />
          </ul>
        </Container>
      </section>
    </>
  )
}
