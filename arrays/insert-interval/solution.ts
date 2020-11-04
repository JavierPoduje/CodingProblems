/*

a = [  ]
b = [  ]

a = [   ]     | [  ]
b =   [    ]  | [    ]

a =   [   ] | [    ]
b = [   ]   | [  ]

a = [     ]
b =   [ ] 

a =   [ ]
b = [     ] 

*/

const overlaps = (a: number[], b: number[]): boolean => {
  return (
    (a[0] == b[0] && a[1] == b[1]) ||
    (a[0] <= b[0] && a[1] < b[1] && a[1] > b[0]) ||
    (a[0] <= b[0] && a[0] > b[1] && a[1] > b[0]) ||
    (a[0] < a[0] && a[1] > b[1]) ||
    (a[0] > b[0] && a[0] < b[1])
  )
}

const merge = (
  intervals: number[][],
  left: number,
  right: number,
  newInterval: number[]
): void => {
  const min = intervals
    .slice(left, right)
    .map((tuple) => tuple[0])
    .reduce((a, b) => Math.min(a, b, newInterval[0]), 999999999)
  const max = intervals
    .slice(left, right)
    .map((tuple) => tuple[1])
    .reduce((a, b) => Math.max(a, b, newInterval[1]), 0)

  intervals.splice(left, Math.max(1, right - left), [min, max])
}

const insert = (intervals: number[][], newInterval: number[]): number[][] => {
  let i = 0
  let j = 0
  let overlapFounded = false

  while (i < intervals.length) {
    while (overlaps(intervals[j], newInterval)) {
      if (!overlapFounded) {
        overlapFounded = true
      } else {
        j++
      }
    }

    if (overlapFounded) {
      merge(intervals, i, j, newInterval)
      break
    } else {
      i++
      j++
    }
  }

  return intervals
}

console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16]
    ],
    [4, 8]
  )
)
