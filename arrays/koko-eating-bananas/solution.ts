/**
 * O(logK * n) where K is the final answer (bPerHour) and n is the length
 * of the pile.
 */
const minEatingSpeed = (piles: number[], H: number): number => {
  let low = 1
  let high = Math.max(...piles)
  let bPerHour = Math.floor((low + high) / 2)

  let minBPerHour: number | null = null

  while (low <= high) {
    let hoursTaken = hoursTakenForEatingBananas(piles, bPerHour)

    if (hoursTaken < H) {
      high = bPerHour - 1
    } else {
      if (hoursTaken === H) {
        minBPerHour = minBPerHour ? Math.min(minBPerHour, bPerHour) : bPerHour
      }
      low = bPerHour + 1
    }

    bPerHour = Math.floor((low + high) / 2)
  }

  return minBPerHour ? minBPerHour : low
}

const hoursTakenForEatingBananas = (
  piles: number[],
  bPerHour: number
): number => {
  let hoursTaken = 0

  piles.forEach((pile) => {
    hoursTaken +=
      pile % bPerHour == 0 ? pile / bPerHour : Math.floor(pile / bPerHour) + 1
  })

  return hoursTaken
}

export default minEatingSpeed
