import findMinArrowShots from './solution'

test('meetings=[[10,16],[2,8],[1,6],[7,12]]; should return 2', () => {
  let expected = 2
  let answer = findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12]
  ])

  expect(answer).toEqual(expected)
})

test('meetings=[[1,2],[3,4],[5,6],[7,8]]; should return 4', () => {
  let expected = 4
  let answer = findMinArrowShots([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
  ])

  expect(answer).toEqual(expected)
})

test('meetings=[[1,2],[2,3],[3,4],[4,5]]; should return 4', () => {
  let expected = 2
  let answer = findMinArrowShots([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5]
  ])

  expect(answer).toEqual(expected)
})

test('meetings=[[1,2]]; should return 1', () => {
  let expected = 1
  let answer = findMinArrowShots([[1, 2]])

  expect(answer).toEqual(expected)
})

test('meetings=[[2,3], [2,3]]; should return 1', () => {
  let expected = 1
  let answer = findMinArrowShots([
    [2, 3],
    [2, 3]
  ])

  expect(answer).toEqual(expected)
})

test('meetings=[[-1,1],[0,1],[2,3],[1,2]]; should return 2', () => {
  let expected = 2
  let answer = findMinArrowShots([
    [-1, 1],
    [0, 1],
    [2, 3],
    [1, 2]
  ])

  expect(answer).toEqual(expected)
})
