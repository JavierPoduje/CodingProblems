import validPalindrome from './solution'

test("'aba' is a valid palindrome", () => {
  let expected = true
  let answer = validPalindrome('aba')

  expect(answer).toBe(expected)
})

test("'abca' is a valid palindrome if we delete 'c'", () => {
  let expected = true
  let answer = validPalindrome('abca')

  expect(answer).toBe(expected)
})

test('Emtpy string is a valid palindrome', () => {
  let expected = true
  let answer = validPalindrome('')

  expect(answer).toBe(expected)
})

test("'abcbrar' string is not a valid palindrome", () => {
  let expected = false
  let answer = validPalindrome('abcbrar')

  expect(answer).toBe(expected)
})
