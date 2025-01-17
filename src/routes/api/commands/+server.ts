import { PUBLIC_ASSET } from "$env/static/public";

export async function GET() {
  const date = Date.now()
  const commandsResponse = await fetch(`${PUBLIC_ASSET}/chatbot/commands.json?${date}`);
  const response = await commandsResponse.json()
  return new Response(JSON.stringify(response), {
    headers : {
      'Content-Type': 'application/json'
    }
  })
}