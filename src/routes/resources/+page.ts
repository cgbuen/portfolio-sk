import type {PageLoad} from './$types'

export const load: PageLoad = async ({fetch}) => {
  const response = await fetch('/api/resources')
  return {
    links: await response.json(),
  }
}
