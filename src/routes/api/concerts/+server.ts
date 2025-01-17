import { PUBLIC_ASSET } from "$env/static/public";

interface Photo {
  active: boolean
  city: string
  date: string
  height: number
  origHeight: number
  origWidth: number
  roll: string
  number: number
  subject: string
  venue: string
  width: number
  src: string
  alt1: string
  alt2: string
  alt: string
  description: string
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export async function GET() {
  const photographyResponse = await fetch(`${PUBLIC_ASSET}/concerts/concerts.json`)
  const photographyResponseJson = await photographyResponse.json()
  const response = photographyResponseJson
    .filter((photo: Photo) => photo.active)
    .map((photo: Photo) => {
      photo.src = `${PUBLIC_ASSET}/concerts/${photo.roll}+${photo.number}.jpg?${Date.now()}`
      photo.origHeight = photo.height
      photo.origWidth = photo.width
      photo.alt1 = `${photo.subject}${(photo.venue && photo.venue.includes('n/a')) ? '' : ` @ ${photo.venue}`}`
      photo.alt2 = photo.city === 'Coachella' ? `${photo.city} ${photo.date.substring(0, 4)}` : `${photo.city}, ${MONTHS[parseInt(photo.date.substring(5, 7)) - 1]} ${photo.date.substring(0, 4)}`
      photo.alt = `${photo.alt1}, ${photo.alt2}`
      photo.description = `${photo.alt1}\n${photo.alt2}`
      return photo
    })
  return new Response(JSON.stringify(response), {
    headers : {
      'Content-Type': 'application/json'
    }
  })
}