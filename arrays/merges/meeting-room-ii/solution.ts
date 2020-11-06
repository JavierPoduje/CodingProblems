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

  return -1
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
    if (leftSize[0][0] <= rightSize[0][0]) {
      let shifted = leftSize.shift()
      if (shifted) sortedMeetings.push(shifted)
    } else {
      let shifted = rightSize.shift()
      if (shifted) sortedMeetings.push(shifted)
    }
  }

  if (leftSize.length) return [...sortedMeetings, ...leftSize]
  if (rightSize.length) return [...sortedMeetings, ...rightSize]

  return sortedMeetings
}

console.log(
  sortByStart([
    [2, 5],
    [1, 4],
    [0, 10]
  ])
)

export default roomsNeeded
