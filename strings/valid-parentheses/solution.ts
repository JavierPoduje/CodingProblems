const isValid = (str: string): boolean => {
  const isOpenChar = (char: string): boolean => '[({'.includes(char)
  const match = (fst: string, scd: string): boolean => {
    return (
      (scd == '{' && fst == '}') ||
      (scd == '(' && fst == ')') ||
      (scd == '[' && fst == ']')
    )
  }

  const visited: string[] = []

  for (const curr of str) {
    if (isOpenChar(curr)) {
      visited.push(curr)
    } else {
      if (!visited.length) return false

      const lastVisited = visited[visited.length - 1]
      if (match(curr, lastVisited)) {
        visited.pop()
      } else {
        return false
      }
    }
  }

  return !visited.length
}

export default isValid
