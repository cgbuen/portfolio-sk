import { PUBLIC_ASSET } from "$env/static/public";

interface Plate {
  id: string
  name: string
  src: string
  kerf: string
  notes: string
}

export async function GET() {
  const date = Date.now()
  const platesResponse = await fetch(`${PUBLIC_ASSET}/plates/plates.json?${date}`);
  const platesResponseJson = await platesResponse.json()
  const response = platesResponseJson.map((plate: Plate) => {
    plate.src = plate.src === 'n/a' ? plate.src : `${PUBLIC_ASSET}/resources/${plate.src}?${date}`
    return plate
  })
  return new Response(JSON.stringify(response), {
    headers : {
      'Content-Type': 'application/json'
    }
  })
}