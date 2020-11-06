import merge from './solution'

test('[[1, 4], [4, 5]] should return [[1, 5]]', () => {
  let expected = [[1, 5]]
  let answer = merge([
    [1, 4],
    [4, 5]
  ])
  expect(answer).toStrictEqual(expected)
})

test('[[1, 3], [2, 6], [8, 10], [15, 18]] should return [[1, 6], [8, 10], [15, 18]]', () => {
  let expected = [
    [1, 6],
    [8, 10],
    [15, 18]
  ]
  let answer = merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
  ])
  expect(answer).toStrictEqual(expected)
})
