/**
 * Given an array of numbers from 1 to n ([1, n]) with a duplicate number, return
 * the duplicate number.
 *
 * Complexity: O(n)
 * Space: O(1)
 *
 * @param {number[]} nums
 * @returns {number}
 */

const findDuplicate = (nums: number[]): number => {
  let sum = 0
  let actualSum = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (i < nums.length - 1) actualSum += i + 1
  }

  return sum - actualSum
}

export default findDuplicate
