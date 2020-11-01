import findEvenIndex from './solution'

test('[1,2,3,4,3,2,1] should return 3', () => {
  let expected = 3
  let answer = findEvenIndex([1, 2, 3, 4, 3, 2, 1])
  expect(answer).toStrictEqual(expected)
})

test('[1, 2, 3, 4, 3, 2, 1] should return 1', () => {
  let expected = 1
  let answer = findEvenIndex([1, 100, 50, -51, 1, 1])
  expect(answer).toStrictEqual(expected)
})

test('[1, 2, 3, 4, 5, 6] should return -1', () => {
  let expected = -1
  let answer = findEvenIndex([1, 2, 3, 4, 5, 6])
  expect(answer).toStrictEqual(expected)
})

test('[20, 10, 30, 10, 10, 15, 35] should return 3', () => {
  let expected = 3
  let answer = findEvenIndex([20, 10, 30, 10, 10, 15, 35])
  expect(answer).toStrictEqual(expected)
})
