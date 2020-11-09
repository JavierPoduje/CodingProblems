import intervalIntersection from './solution'

test('A=[]; B=[] should return [5,7]', () => {
  let A = [
    [0, 2],
    [5, 10],
    [13, 23],
    [24, 25]
  ]
  let B = [
    [1, 5],
    [8, 12],
    [15, 24],
    [25, 26]
  ]

  let expected = [
    [1, 2],
    [5, 5],
    [8, 10],
    [15, 23],
    [24, 24],
    [25, 25]
  ]
  let answer = intervalIntersection(A, B)
  expect(answer).toEqual(expected)
})
