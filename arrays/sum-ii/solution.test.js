import fourSumCount from './solution'

test('A=[1,2]; B=[-2,-1]; C=[-1,2]; D=[0,2] should return 2', () => {
  let expected = 2
  let answer = fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2])

  expect(answer).toStrictEqual(expected)
})

test('A=[-1,-1]; B=[-1,1]; C=[-1,1]; D=[1,-1] should return 6', () => {
  let expected = 6
  let answer = fourSumCount([-1, -1], [-1, 1], [-1, 1], [1, -1])

  expect(answer).toStrictEqual(expected)
})
