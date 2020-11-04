import insert from './solution'

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
  expect(answer).toStrictEqual(expected)
})

test('intervals=[[1,2],[3,5],[6,7],[8,10],[12,16]]; newInterval=[4,8] should return [[1,2],[3,10],[12,16]]', () => {
  let expected = [
    [1, 2],
    [3, 10],
    [12, 16]
  ]
  let answer = insert([
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
    [4, 8]
  ])
  expect(answer).toStrictEqual(expected)
})
