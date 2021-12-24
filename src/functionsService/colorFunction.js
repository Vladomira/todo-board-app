const labelColors = [
  { color: '#1400FF', id: 1 },
  { color: '#FF00B8', id: 2 },
  { color: '#FF0000', id: 3 },
  { color: '#00D1FF', id: 4 },
  { color: '#F8D210', id: 5 },
  { color: '#DB1F48', id: 6 },

  { color: '#FF9636', id: 7 },
  { color: '#81B622', id: 8 },
  { color: '#985eb9', id: 9 },
  { color: '#e3175b', id: 10 },
]
function coloriseName(id) {
  const nameColor = labelColors.map((el) => {
    if (el.id === id && el.id !== undefined) {
      return [el.color]
    }
  })

  const color = nameColor.join('')
  return color
}

export default coloriseName
