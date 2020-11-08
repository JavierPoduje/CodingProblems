/**
 * complexity: O(log n) because of the sort
 * space: O(1)
 */
const findMinArrowShots = (points: number[][]): number => {
  if (!points.length) return 0
  if (points.length === 1) return 1

  points.sort((a, b) => a[0] - b[0])

  let shoots = 0
  let i = 0
  let j = 1

  while (i < points.length) {
    if (i === points.length - 1) {
      shoots += 1
      break
    }

    let overlappedFraction = findOverlapedFraction(points[i], points[j])

    while (j < points.length && overlappedFraction.length) {
      overlappedFraction = findOverlapedFraction(overlappedFraction, points[j])
      if (overlappedFraction.length) j++
    }

    shoots += 1
    i = j
    j = i + 1
  }

  return shoots
}

const findOverlapedFraction = (a: number[], b: number[]): number[] =>
  a[1] >= b[0] ? [Math.max(a[0], b[0]), Math.min(a[1], b[1])] : []

export default findMinArrowShots
