const findDuplicates = (arr: number[]): number[] => {
  if (arr.length <= 1) return []

  const output: number[] = []

  for (const n of arr) {
    const index = Math.abs(n) - 1

    if (arr[index] < 0) {
      output.push(Math.abs(n))
    } else {
      arr[index] = -arr[index]
    }
  }

  return output
}

export default findDuplicates
