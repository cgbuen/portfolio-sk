import type {PageLoad} from './$types'

export const load: PageLoad = async ({fetch}) => {
  const response = await fetch('/api/concerts')
  return {
    concerts: await response.json(),
  }
}
