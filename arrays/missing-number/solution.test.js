import missingNumber from './solution'

test('nums=[3, 0, 1] should return 2', () => {
  let expected = 2
  let answer = missingNumber([3,0,1])

  expect(answer).toEqual(expected)
})

test('nums=[0,1] should return 2', () => {
  let expected = 2
  let answer = missingNumber([0,1])

  expect(answer).toEqual(expected)
})

test('nums=[9,6,4,2,3,5,7,0,1] should return 8', () => {
  let expected = 8
  let answer = missingNumber([9,6,4,2,3,5,7,0,1])

  expect(answer).toEqual(expected)
})

test('nums=[0] should return 1', () => {
  let expected = 1
  let answer = missingNumber([0])

  expect(answer).toEqual(expected)
})

