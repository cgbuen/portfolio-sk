import { PUBLIC_ASSET } from "$env/static/public";

export async function GET() {
  const date = Date.now()
  const requests = []
  requests.push(fetch(`${PUBLIC_ASSET}/gear/gear.json?${date}`))
  requests.push(fetch(`${PUBLIC_ASSET}/gear/gear-desc.json?${date}`))
  const responses = await Promise.all(requests)
  const gear = await responses[0].json()
  const gearDescriptions = await responses[1].json()
  const response = {
    gear,
    gearDescriptions,
  }
  return new Response(JSON.stringify(response), {
    headers : {
      'Content-Type': 'application/json'
    }
  })
}