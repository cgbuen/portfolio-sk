export const showable = (x: string) => {
  return (
    x &&
    !x.includes('TBD') &&
    !x.includes('?') &&
    !x.includes('[planned]') &&
    !x.includes('[prop]') &&
    !x.includes('[stock]') &&
    !x.includes('Stock') &&
    !x.includes('N/A')
  )
}
