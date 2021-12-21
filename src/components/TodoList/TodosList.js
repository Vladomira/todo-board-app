import { todoData } from '../../servises/fetchData'
import TodoItem from './TodoItem'
import { connect, useSelector } from 'react-redux'
// import actions from '../../redux/todos/todos-actions'
import * as operations from '../../redux/todos/todos-operations'
import Controls from '../Controls'
// import { getUsers } from '../../redux/todos/todos-selectors'

function TodosList() {
  const todos = useSelector((state) => state.data.todos)
  return (
    <>
      <Controls
      // initialCondition={initialCondition}
      // inProgressCondition={inProgressCondition}
      // DoneCondition={DoneCondition}
      />

      <ul>
        <li>
          {/* <TodoItem onToggleCompleted={() => onToggleCompleted({id, completed:!completed})} /> */}
          {/* <TodoItem onToggleCompleted={() => onToggleCompleted()} /> */}
        </li>
      </ul>
    </>
  )
}
const mapStateToProps = (state) => ({
  todos: state.data.todos,
  users: state.data.users,
  // return { value: state.conditionValue }
})
const mapDispatchToProps = (dispatch) => ({
  // fetchTodos: () => dispatch(opserations.fetchTodos()),
  // onToggleCompleted: (id) => dispatch(operations.toggleCompleted(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
// return {
//     onInitialCondition: () => dispatch(action.initialCondition),
//     onProgressCondition: () => dispatch(action.inProgressCondition),
//     onDoneCondition: () => dispatch(action.DoneCondition),
//   }
