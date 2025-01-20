import type {PageLoad} from './$types'

export const load: PageLoad = async ({fetch}) => {
  const response = await fetch('/api/keyboards')
  return {
    isKeyboards: true,
    collection: await response.json(),
  }
}
