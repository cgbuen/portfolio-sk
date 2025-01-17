import type { PageLoad } from './$types';

export const load: PageLoad = async ({fetch}) => {
  const response = await fetch('/api/software')
  return {
  	software: await response.json()
  };
};