/**
 * O(Kn) where K is the final answer and n is the length of the pile
 */
const minEatingSpeed = (piles: number[], H: number): number => {
  let bPerHour = 1
  let eatingSpeed: number

  do {
    bPerHour += 1
    eatingSpeed = 0

    for (let i = 0; i < piles.length; i++) {
      let hoursToAdd = 0
      let pile = piles[i]

      hoursToAdd =
        pile % bPerHour == 0 ? pile / bPerHour : Math.floor(pile / bPerHour) + 1

      eatingSpeed += hoursToAdd
    }
  } while (eatingSpeed > H)

  return bPerHour
}

console.log(minEatingSpeed([3, 6, 7, 11], 8))

export default minEatingSpeed
