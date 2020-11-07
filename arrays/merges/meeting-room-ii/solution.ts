/**
 * Returns the max number of simultaneous overlaps of meetings - O(log n)
 *
 * Complexity: O(log n) cause of the initial sorting
 * Space: O(n) used in the merge sort
 *
 * @param {number[][]} meetings
 * @returns {number}
 */
const roomsNeeded = (meetings: number[][]): number => {
  sortByStart(meetings) // O(log n)

  let maxOverlap = 1

  for (let i = 0; i < meetings.length; i++) {
    let curr = meetings[i]
    let j = i + 1
    let currOverlaps = 0

    while (j < meetings.length && overlaps(curr, meetings[j])) {
      currOverlaps += 1
      j++
    }

    maxOverlap = Math.max(maxOverlap, currOverlaps)
  }

  return maxOverlap
}

const sortByStart = (meetings: number[][]): number[][] => {
  if (meetings.length < 2) return meetings

  // get the middle index
  let mid = Math.floor(meetings.length / 2)

  // sort the left and the right size of meetings
  const leftSize = sortByStart(meetings.slice(0, mid))
  const rightSize = sortByStart(meetings.slice(mid, meetings.length))

  // initialize the output
  const sortedMeetings: number[][] = []

  // merge left and right size
  while (leftSize.length && rightSize.length) {
    let shifted =
      leftSize[0][0] <= rightSize[0][0] ? leftSize.shift() : rightSize.shift()
    if (shifted) sortedMeetings.push(shifted)
  }

  if (leftSize.length) return [...sortedMeetings, ...leftSize]
  if (rightSize.length) return [...sortedMeetings, ...rightSize]

  return sortedMeetings
}

const overlaps = (a: number[], b: number[]): boolean => {
  return (
    (a[0] <= b[0] && a[1] < b[1] && a[0] < b[1]) ||
    (a[0] >= b[0] && a[1] > b[1] && a[0] < b[1]) ||
    (a[0] < b[0] && a[1] >= b[1] && a[0] < b[1]) ||
    (a[0] > b[0] && a[1] <= b[1] && a[0] < b[1]) ||
    (a[0] == b[0] && a[1] == b[1])
  )
}

export default roomsNeeded
