/**
 * O(log n) because of the sort operation (merge sort)
 */
const merge = (intervals: number[][]): number[][] => {
  if (intervals.length < 2) return intervals

  intervals = sortByStart(intervals) // O(log n)
  let idx = 0

  while (idx < intervals.length - 1) {
    if (overlap(intervals[idx], intervals[idx + 1])) {
      const merged = mergeIntervals(intervals[idx], intervals[idx + 1])
      intervals.splice(idx, 2, merged)
    } else {
      idx++
    }
  }

  return intervals
}

const mergeIntervals = (a: number[], b: number[]): number[] => [
  Math.min(a[0], b[0]),
  Math.max(a[1], b[1])
]

const sortByStart = (intervals: number[][]): number[][] => {
  // if just one element, return it
  if (intervals.length < 2) return intervals

  // get the middle idx
  let mid = Math.floor(intervals.length / 2)

  // split intervals by half
  let leftSize = [...intervals].slice(0, mid)
  let rightSize = [...intervals].slice(mid, intervals.length)

  // sort both halfs
  const sortedLeftSize = sortByStart(leftSize)
  const sortedRightSize = sortByStart(rightSize)

  // create a new array which will be the sorted one
  let sortedIntervals = []
  while (sortedLeftSize.length && sortedRightSize.length) {
    const shifted =
      sortedLeftSize[0][0] < sortedRightSize[0][0]
        ? sortedLeftSize.shift()
        : sortedRightSize.shift()
    if (shifted) sortedIntervals.push(shifted)
  }

  // add the remaining elements
  if (sortedLeftSize.length) {
    sortedIntervals = [...sortedIntervals, ...sortedLeftSize]
  }
  if (sortedRightSize.length) {
    sortedIntervals = [...sortedIntervals, ...sortedRightSize]
  }

  // return the sorted intervals array
  return sortedIntervals
}

const overlap = (a: number[], b: number[]): boolean => {
  return (
    (a[0] <= b[0] && a[1] <= b[1] && a[1] >= b[0]) ||
    (a[0] >= b[0] && a[1] >= b[1] && a[0] <= b[1]) ||
    (a[0] <= b[0] && a[1] >= b[1] && a[1] >= b[0]) ||
    (a[0] >= b[0] && a[1] <= b[1] && b[1] >= a[0])
  )
}

export default merge
