/**
 * Time: O(n)
 * Space: O(1)
 */
const validPalindrome = (s: string): boolean => {
  const isPalindrome = (s: string): boolean => {
    if (s.length <= 1) return true
    return s[0] === s[s.length - 1]
      ? isPalindrome(s.slice(1, s.length - 1))
      : false
  }

  let left = 0
  let right = s.length - 1
  while (left <= right) {
    if (s[left] === s[right]) {
      left++
      right--
    } else {
      return (
        isPalindrome(s.slice(left + 1, right + 1)) ||
        isPalindrome(s.slice(left, right))
      )
    }
  }

  return true
}

export default validPalindrome
