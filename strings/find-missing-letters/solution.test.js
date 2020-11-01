import findMissingLetter from './solution'

test("['a', 'b', 'c', 'd', 'f'] should return 'e'", () => {
  let expected = 'e'
  let answer = findMissingLetter(['a', 'b', 'c', 'd', 'f'])

  expect(answer).toBe(expected)
})

test("['O', 'Q', 'R', 'S'] should return 'e'", () => {
  let expected = 'P'
  let answer = findMissingLetter(['O', 'Q', 'R', 'S'])

  expect(answer).toBe(expected)
})
