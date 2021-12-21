import React from 'react'
import { connect } from 'react-redux'
import { todoCompleted } from '../redux/todos/todos-operations'

const Controls = ({
  initialCondition,
  inProgressCondition,
  DoneCondition,
  todoCompleted,
}) => (
  <ul>
    <li>
      <button type="button" className="button">
        {}
        To Do
      </button>
    </li>
    <li>
      <button type="button" className="button">
        {inProgressCondition}
        In progress
      </button>
    </li>
    <li>
      <button type="button" className="button">
        {DoneCondition}
        Done
      </button>
    </li>
  </ul>
)

// export default Controls
const mapStateToProps = (state) => ({
  condition: state.data.condition,
})
const mapDispatchToProps = (dispatch) => ({
  updateTodoCondition: (todoId) => dispatch(todoCompleted(todoId)),
  // onToggleCompleted: (id) => dispatch(operations.toggleCompleted(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Controls)
