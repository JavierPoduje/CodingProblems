/*
 * Complexity: O(A * B)
 * Space: O(max(A, B))
 */
const intervalIntersection = (A: number[][], B: number[][]): number[][] => {
  const output = []

  for (let i = 0; i < A.length; i++) {
    const a = A[i]

    for (let j = 0; j < B.length; j++) {
      const b = B[j]
      if (overlap(a, b))
        output.push([Math.max(a[0], b[0]), Math.min(a[1], b[1])])
    }
  }

  return output
}

const overlap = (a: number[], b: number[]): boolean => {
  return (
    (a[0] <= b[0] && a[1] <= b[1] && a[1] >= b[0]) ||
    (a[0] >= b[0] && a[1] >= b[1] && a[0] <= b[1]) ||
    (a[0] <= b[0] && a[1] >= b[1] && a[1] >= b[0]) ||
    (a[0] >= b[0] && a[1] <= b[1] && b[1] >= a[0])
  )
}

export default intervalIntersection
