/*
Complexity: (n)
Space: O(1)

incomplete = [0, n].sum()
complete = [0, 1, 2, 3, 4, 5].sum()

complete - incomplete
*/

const missingNumber = (nums: number[]): number => {
  const reducer = (a: number, b: number) => a + b

  const complete = Array.from(Array(nums.length + 1).keys()).reduce(reducer, 0)
  const incomplete = nums.reduce(reducer, 0)

  return complete - incomplete
};

export default missingNumber
