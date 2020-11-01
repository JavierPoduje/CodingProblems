/*
 * #Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/

// Solution
const findMissingLetter = (array: string[]): string => {
  let cur = array[0].charCodeAt(0)
  let next = array[1].charCodeAt(0)

  let idx = 1
  while (next - cur === 1 && idx < array.length) {
    cur = array[idx].charCodeAt(0)
    next = array[idx + 1].charCodeAt(0)
    idx++
  }

  return String.fromCharCode(cur + 1)
}

// TESTS
const check = (expected: string, answer: string): void => {
  if (expected === answer) {
    console.log('check')
  } else {
    console.log(`expected: ${expected}`)
    console.log(`answer: ${answer}`)
  }

  console.log('\n-------------\n')
}

let expected = 'e'
let answer = findMissingLetter(['a', 'b', 'c', 'd', 'f'])
check(expected, answer)

expected = 'P'
answer = findMissingLetter(['O', 'Q', 'R', 'S'])
check(expected, answer)
