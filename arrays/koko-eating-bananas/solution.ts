/**
 * O(logK * n) where K is the final answer (bPerHour) and n is the length
 * of the pile.
 */
const minEatingSpeed = (piles: number[], H: number): number => {
  let low = 1
  let high = Math.max(...piles)
  let bPerHour = Math.floor((low + high) / 2)

  let lastEqualRate: number | null = null

  while (low <= high) {
    let hoursTaken = hoursTakenForEatingBananas(piles, bPerHour)

    if (hoursTaken >= H) {
      if (hoursTaken === H) {
        lastEqualRate = lastEqualRate
          ? Math.min(lastEqualRate, bPerHour)
          : bPerHour
      }
      low = bPerHour + 1
    } else if (hoursTaken < H) {
      high = bPerHour - 1
    }

    bPerHour = Math.floor((low + high) / 2)
  }

  return lastEqualRate ? lastEqualRate : low
}

const hoursTakenForEatingBananas = (
  piles: number[],
  bPerHour: number
): number => {
  let hoursTaken = 0

  piles.forEach((pile) => {
    if (pile % bPerHour == 0) {
      hoursTaken += pile / bPerHour
    } else {
      hoursTaken += Math.floor(pile / bPerHour) + 1
    }
  })

  return hoursTaken
}

export default minEatingSpeed
