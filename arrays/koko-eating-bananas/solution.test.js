import minEatingSpeed from './solution'

test('piles=[3,6,7,11]; H=8 should return 4', () => {
  let expected = 4
  let answer = minEatingSpeed([3, 6, 7, 11], 8)
  expect(answer).toBe(expected)
})

test('piles=[30,11,23,4,20]; H=5 should return 30', () => {
  let expected = 30
  let answer = minEatingSpeed([30, 11, 23, 4, 20], 5)
  expect(answer).toBe(expected)
})

test('piles=[30,11,23,4,20]; H=6 should return 23', () => {
  let expected = 23
  let answer = minEatingSpeed([30, 11, 23, 4, 20], 6)
  expect(answer).toBe(expected)
})

test('piles=[2,2]; H=2 should return 2', () => {
  let expected = 2
  let answer = minEatingSpeed([2, 2], 2)
  expect(answer).toBe(expected)
})

test('piles=[991988498,...]; H=623699466 should return 12', () => {
  let expected = 12
  let answer = minEatingSpeed(
    [
      991988498,
      635554785,
      800826315,
      84628839,
      125457816,
      289057051,
      932180235,
      632966903,
      737222110,
      927657625,
      980631240,
      315272792
    ],
    623699466
  )
  expect(answer).toBe(expected)
})
