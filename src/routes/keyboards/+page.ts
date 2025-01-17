import type { PageLoad } from './$types';

export const load: PageLoad = async ({fetch}) => {
  const response = await fetch('/api/keyboards')
  return {
  	keyboards: await response.json()
  };
};