import findDuplicate from './solution'

test('nums=[1,3,4,2,2] should return 2', () => {
  let expected = 2
  let answer = findDuplicate([1, 3, 4, 2, 2])

  expect(answer).toEqual(expected)
})

test('nums=[3,1,3,4,2] should return 2', () => {
  let expected = 3
  let answer = findDuplicate([3, 1, 3, 4, 2])

  expect(answer).toEqual(expected)
})

test('nums=[1, 1] should return 2', () => {
  let expected = 1
  let answer = findDuplicate([1, 1])

  expect(answer).toEqual(expected)
})

test('nums=[1,1,2] should return 2', () => {
  let expected = 1
  let answer = findDuplicate([1, 1, 2])

  expect(answer).toEqual(expected)
})

test('nums=[2,2,2,2,2] should return 2', () => {
  let expected = 2
  let answer = findDuplicate([2, 2, 2, 2, 2])

  expect(answer).toEqual(expected)
})

test('nums=[2,5,9,6,9,3,8,9,7,1] should return 9', () => {
  let expected = 9
  let answer = findDuplicate([2, 5, 9, 6, 9, 3, 8, 9, 7, 1])

  expect(answer).toEqual(expected)
})
