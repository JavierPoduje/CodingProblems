import isAmstrong from './solution'

test('Single digits are Amstrong numbers', () => {
  let answer = isAmstrong(5)
  expect(answer).toBeTruthy()
})

test('There are no two digit Amstrong numbers', () => {
  let answer = isAmstrong(10)
  expect(answer).toBeFalsy()
})

test('Three digit that is Amstrong number', () => {
  let answer = isAmstrong(153)
  expect(answer).toBeTruthy()
})

test('Three digit that is not Amstrong number', () => {
  let answer = isAmstrong(154)
  expect(answer).toBeFalsy()
})

