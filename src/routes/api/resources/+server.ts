import { PUBLIC_ASSET } from "$env/static/public";

interface Link {
  id: string
  name: string
  src: string
  href: string
  description: string
}

export async function GET() {
  const date = Date.now()
  const linksResponse = await fetch(`${PUBLIC_ASSET}/resources/links.json?${date}`);
  const linksResponseJson = await linksResponse.json()
  const response = linksResponseJson.map((link: Link) => {
    link.src = `${PUBLIC_ASSET}/resources/${link.src}?${date}`
    return link
  })
  return new Response(JSON.stringify(response), {
    headers : {
      'Content-Type': 'application/json'
    }
  })
}