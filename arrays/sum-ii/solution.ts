/**
 *
 */
const fourSumCount = (
  A: number[],
  B: number[],
  C: number[],
  D: number[]
): number => {
  // O(n^2)
  let firstHalf: number[] = []
  A.forEach((a: number) => {
    B.forEach((b: number) => firstHalf.push(a + b))
  })

  // O(n^2)
  let secondHalf: number[] = []
  C.forEach((c: number) => {
    D.forEach((d: number) => secondHalf.push(c + d))
  })

  // O(n^2)
  let cnt = 0
  firstHalf.forEach((a: number) => {
    const times = [...secondHalf].filter((b: number) => b === a * -1)
    cnt += times.length
  })

  return cnt
}

export default fourSumCount
