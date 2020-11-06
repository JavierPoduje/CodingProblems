import roomsNeeded from './solution'

test('meetings=[[1, 4], [2, 5], [7, 9]]; should return 2', () => {
  let expected = 2
  let answer = roomsNeeded([
    [1, 4],
    [2, 5],
    [7, 9]
  ])
  expect(answer).toEqual(expected)
})

test('meetings=[[6, 7], [2, 4], [8, 12]]; should return 1', () => {
  let expected = 1
  let answer = roomsNeeded([
    [6, 7],
    [2, 4],
    [8, 12]
  ])
  expect(answer).toEqual(expected)
})

test('meetings=[[1, 4], [2, 3], [3, 6]]; should return 2', () => {
  let expected = 2
  let answer = roomsNeeded([
    [1, 4],
    [2, 3],
    [3, 6]
  ])
  expect(answer).toEqual(expected)
})

test('meetings=[[4,5], [2,3], [2,4], [3,5]]; should return 2', () => {
  let expected = 2
  let answer = roomsNeeded([
    [4, 5],
    [2, 3],
    [2, 4],
    [3, 5]
  ])
  expect(answer).toEqual(expected)
})
