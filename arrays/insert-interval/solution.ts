/*
 */

const insert = (intervals: number[][], newInterval: number[]): number[][] => {
  if (!intervals.length) return [newInterval]

  let i = 0
  let j = 0
  let overlapFounded = false
  //let inserted = false

  while (i < intervals.length) {
    while (j < intervals.length && overlaps(intervals[j], newInterval)) {
      if (!overlapFounded) overlapFounded = true
      j++
    }

    //if (!overlaps(intervals[j], newInterval) && j + 1 < intervals.length - 1) {
    //  if (newInterval[1] < intervals[j + 1][0]) {
    //    intervals.splice(j, 0, newInterval)
    //    interted = true
    //    break
    //  }
    //}

    if (overlapFounded) {
      merge(intervals, i, j - 1, newInterval)
      break
    } else {
      i++
      j++
    }
  }

  if (!overlapFounded) {
    return newInterval[1] < intervals[0][0]
      ? [newInterval, ...intervals]
      : [...intervals, newInterval]
  }

  return intervals
}

const merge = (
  intervals: number[][],
  left: number,
  right: number,
  newInterval: number[]
): void => {
  const min = intervals
    .slice(left, right + 1)
    .map((tuple) => tuple[0])
    .reduce((a, b) => Math.min(a, b, newInterval[0]), 999999999)
  const max = intervals
    .slice(left, right + 1)
    .map((tuple) => tuple[1])
    .reduce((a, b) => Math.max(a, b, newInterval[1]), 0)

  intervals.splice(left, Math.max(1, right - left + 1), [min, max])
}

const overlaps = (a: number[], b: number[]): boolean => {
  return (
    (a[0] <= b[0] && a[1] <= b[1] && a[1] >= b[0]) ||
    (a[0] >= b[0] && a[1] >= b[1] && a[0] <= b[1]) ||
    (a[0] <= b[0] && a[1] >= b[1] && a[1] >= b[0]) ||
    (a[0] >= b[0] && a[1] <= b[1] && b[1] >= a[0])
  )
}

console.log(insert([[1, 5]], [2, 3]))

export default insert
