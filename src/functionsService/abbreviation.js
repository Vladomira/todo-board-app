export default function toAbbreviate(data) {
  const arrName = data.split(' ').slice(0, 2)

  const nameLetter = arrName[0].split('').slice(0, 1)
  const surnameLetter = arrName[1].split('').slice(0, 1)

  const result = [nameLetter, surnameLetter].join('')
  return result
}
