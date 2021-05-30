import reverseWords from './solution'

test("'' returns an empty string", () => {
  let expected = ''
  let answer = reverseWords('')

  expect(answer).toBe(expected)
})

test("String is reversed", () => {
  let expected = "s'teL ekat edoCteeL tsetnoc"
  let answer = reverseWords("Let's take LeetCode contest")

  expect(answer).toBe(expected)
})
