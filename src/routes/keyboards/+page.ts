import type {PageLoad} from './$types'

export const load: PageLoad = async ({fetch}) => {
  const response = await fetch('/api/keyboards')
  return {
    collection: await response.json(),
  }
}
