const findMissingLetter = (array: string[]): string => {
  let cur = array[0].charCodeAt(0)
  let next = array[1].charCodeAt(0)

  let idx = 1
  while (next - cur === 1 && idx < array.length) {
    cur = array[idx].charCodeAt(0)
    next = array[idx + 1].charCodeAt(0)
    idx++
  }

  return String.fromCharCode(cur + 1)
}

export default findMissingLetter
