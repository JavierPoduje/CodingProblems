import addStrings from './solution'

test("('123', '456') returns '579'", () => {
  let expected = '579'
  let answer = addStrings('123', '456')

  expect(answer).toBe(expected)
})

test("('1234', '511') returns '1745'", () => {
  let expected = '1745'
  let answer = addStrings('1234', '511')

  expect(answer).toBe(expected)
})
