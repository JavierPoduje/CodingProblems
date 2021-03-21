const isAmstrong = (num: number): boolean => {
  const arrOfNums = num
    .toString()
    .split('')
    .map(num => parseInt(num))

  if (arrOfNums.length == 1) return true
  if (arrOfNums.length == 2) return false

  const raise = (to: number) => (num: number): number => Math.pow(num, to)
  const reducer = (a: number, b: number): number => a + b
  const sum = arrOfNums.map(raise(arrOfNums.length)).reduce(reducer)

  return sum == num
}

export default isAmstrong
