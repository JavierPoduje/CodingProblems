/**
 * This not the best solution but I'm tired today...
 */
const addStrings = (num1: string, num2: string): string => {
  const castInt = (char: string): number => {
    switch (char) {
      case '1':
        return 1
      case '2':
        return 2
      case '3':
        return 3
      case '4':
        return 4
      case '5':
        return 5
      case '6':
        return 6
      case '7':
        return 7
      case '8':
        return 8
      case '9':
        return 9
      case '0':
        return 0
      default:
        return 0
    }
  }

  const add = (num1: string, num2: string): string => {
    return castInt(num1) + castInt(num2) + ''
  }

  const reverse = (s: string): string => {
    if (s.length <= 1) return s
    return s[s.length - 1] + reverse(s.slice(0, s.length - 1))
  }

  let output = ''

  let idx = 0
  const reversed_num1 = reverse(num1)
  const reversed_num2 = reverse(num2)
  while (idx < reversed_num1.length && idx < reversed_num2.length) {
    output += add(reversed_num1[idx], reversed_num2[idx])
    idx++
  }

  if (reversed_num1.length)
    output += reversed_num1.slice(idx, reversed_num1.length)
  if (reversed_num2.length)
    output += reversed_num2.slice(idx, reversed_num2.length)

  return reverse(output)
}

export default addStrings
