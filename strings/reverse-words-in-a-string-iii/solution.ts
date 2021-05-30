/**
 * Time: O(n)
 * Space O(n)
 */
const reverseWords = (str: string): string => {
  const reverse = (word: string): string => {
    if (word.length <= 1) return word
    return word[word.length - 1] + reverse(word.slice(0, word.length - 1))
  }

  return str.split(' ').map(reverse).join(' ')
}

export default reverseWords
