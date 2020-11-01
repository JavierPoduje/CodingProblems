const findEvenIndex = (arr: number[]): number => {
  let index = 0

  let leftSize: number[] = [arr[index]]
  let rightSize: number[] = [...arr]

  let leftSum = arr[index]
  let rightSum = [...arr].reduce((a, b) => a + b, 0)

  while (index < arr.length) {
    if (leftSum === rightSum) return index

    index += 1
    const removed = rightSize.shift()
    leftSize = [...leftSize, rightSize[0]]

    leftSum += rightSize[0]
    rightSum -= removed ? removed : 0
  }

  return -1
}

export default findEvenIndex
