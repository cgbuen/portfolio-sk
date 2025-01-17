import type { PageLoad } from './$types';

export const load: PageLoad = async ({fetch}) => {
  const response = await fetch('/api/commands')
  return {
  	commands: await response.json()
  };
};