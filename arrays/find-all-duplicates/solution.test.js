import findDuplicates from './solution'

test('[4, 3, 2, 7, 8, 2, 3, 1] should return [2,3]', () => {
  let expected = [2, 3]
  let answer = findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])
  expect(answer).toStrictEqual(expected)
})

test('[1, 1] should return [1]', () => {
  let expected = [1]
  let answer = findDuplicates([1, 1])
  expect(answer).toStrictEqual(expected)
})
