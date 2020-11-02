import minEatingSpeed from './solution'

test('[3,6,7,11] should return 4', () => {
  let expected = 4
  let answer = minEatingSpeed([3, 6, 7, 11], 8)
  expect(answer).toBe(expected)
})
