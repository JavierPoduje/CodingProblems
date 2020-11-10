/*

brute force:

Complexity: (n * log n)
Spece = O(1)

1. sort O(n log n)

2. iterate over the number and return first missing one, the last + 1 otherwise

*/

const missingNumber = (nums: number[]): number => {
  nums.sort((a,b) => a-b)

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] !== 1) return nums[i] + 1
  }

  return nums[nums.length - 1] + 1
};

export default missingNumber
