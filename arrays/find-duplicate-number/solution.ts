/**
 * Given an array of numbers from 1 to n ([1, n]) with a duplicate number, return
 * the duplicate number.
 *
 * Complexity: O(n)
 * Space: O(n)
 *
 * @param {number[]} nums
 * @returns {number}
 */

const findDuplicate = (nums: number[]): number => {
  let uniques = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (uniques.has(nums[i])) return nums[i]
    uniques.add(nums[i])
  }

  return nums[0]
}

export default findDuplicate
