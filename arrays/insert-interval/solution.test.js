import insert from './solution'

test('intervals=[]; newInterval=[5,7] should return [5,7]', () => {
  let expected = [[5, 7]]
  let answer = insert([], [5, 7])
  expect(answer).toEqual(expected)
})

test('intervals=[[3,5],[12,15]]; newInterval=[6,6] should return [[3,5],[6,6],[12,15]]', () => {
  let expected = [
    [3, 5],
    [6, 6],
    [12, 15]
  ]
  let answer = insert(
    [
      [3, 5],
      [12, 15]
    ],
    [6, 6]
  )
  expect(answer).toEqual(expected)
})

test('intervals=[[1,5]]; newInterval=[0,0] should return [[0,0], [1,5]]', () => {
  let expected = [
    [0, 0],
    [1, 5]
  ]
  let answer = insert([[1, 5]], [0, 0])
  expect(answer).toEqual(expected)
})

test('intervals=[[1,5]]; newInterval=[2,7] should return [1,7]', () => {
  let expected = [[1, 7]]
  let answer = insert([[1, 5]], [2, 7])
  expect(answer).toEqual(expected)
})

test('intervals=[[1,5]]; newInterval=[2,2] should return [1,5]', () => {
  let expected = [[1, 5]]
  let answer = insert([[1, 5]], [2, 3])
  expect(answer).toEqual(expected)
})

test('intervals=[[1,3],[6,9]]; newInterval=[2,5] should return [[1,5],[6,9]]', () => {
  let expected = [
    [1, 5],
    [6, 9]
  ]
  let answer = insert(
    [
      [1, 3],
      [6, 9]
    ],
    [2, 5]
  )
  expect(answer).toEqual(expected)
})

test('intervals=[[1,2],[3,5],[6,7],[8,10],[12,16]]; newInterval=[4,8] should return [[1,2],[3,10],[12,16]]', () => {
  let expected = [
    [1, 2],
    [3, 10],
    [12, 16]
  ]
  let answer = insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16]
    ],
    [4, 8]
  )
  expect(answer).toEqual(expected)
})
