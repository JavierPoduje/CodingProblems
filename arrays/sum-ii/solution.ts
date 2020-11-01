/**
 * Returns the number of posible solutions such as A[i], B[j], C[k], D[l]
 *
 * Complexity:
 *   - space: O(n^2)
 *   - time: O(n^2)
 *
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @returns {number}
 */
const fourSumCount = (
  A: number[],
  B: number[],
  C: number[],
  D: number[]
): number => {
  // declare obj that will contain the number of times that each sum occurs
  let sumsForAB: { [sum: number]: number } = {}

  // calculate the number of times that each sum occur
  A.forEach((a: number) => {
    B.forEach((b: number) => {
      sumsForAB[a + b] = a + b in sumsForAB ? sumsForAB[a + b] + 1 : 1
    })
  })

  // declare variable for total of posible solutions
  let cnt = 0

  // of each sum of c and d, check if the inverse(x * -1) value exists in sumsForAB
  // if exists, sum the occurrences
  C.forEach((c: number) => {
    D.forEach((d: number) => {
      const solution = (c + d) * -1
      if (solution in sumsForAB) cnt += sumsForAB[solution]
    })
  })

  return cnt
}

export default fourSumCount
