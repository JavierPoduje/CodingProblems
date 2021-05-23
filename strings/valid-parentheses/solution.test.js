import isValid from './solution'

test("'()' have valid parentheses", () => {
  let expected = true
  let answer = isValid("()")

  expect(answer).toBe(expected)
})

test("'' have valis parentheses", () => {
  let expected = true
  let answer = isValid("")

  expect(answer).toBe(expected)
})

test("()[]{}", () => {
  let expected = true
  let answer = isValid("()[]{}")

  expect(answer).toBe(expected)
})

test("[}", () => {
  let expected = false
  let answer = isValid("[}")

  expect(answer).toBe(expected)
})

test("([)]", () => {
  let expected = false
  let answer = isValid("([)]")

  expect(answer).toBe(expected)
})

