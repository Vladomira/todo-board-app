const changeCondition = (state, payload) => {
  const newObj = state.map((todo) => {
    const { id, condition } = todo
    if (id === payload.id) {
      switch (condition) {
        case 'To do':
          return { ...todo, condition: 'In progress' }

        case 'In progress':
          return { ...todo, condition: 'Done' }

        default:
          return { ...todo }
      }
    } else return { ...todo }
  })
  return newObj
}

export default changeCondition
