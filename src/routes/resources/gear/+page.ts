import type {PageLoad} from './$types'

export const load: PageLoad = async ({fetch}) => {
  const response = await fetch('/api/gear')
  return {
    gear: await response.json(),
  }
}
