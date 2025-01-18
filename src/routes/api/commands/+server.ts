import {PUBLIC_ASSET} from '$env/static/public'

interface Command {
  command: string
  aliases: string
  description: string
  href: string
}

export async function GET() {
  const date = Date.now()
  const commandsResponse = await fetch(
    `${PUBLIC_ASSET}/chatbot/commands.json?${date}`,
  )
  const commandsResponseJson = await commandsResponse.json()
  const response = commandsResponseJson.map((command: Command) => {
    if (command.command === 'commands') {
      command.href = '/resources/commands'
    }
    command.command = `!${command.command}`
    command.aliases = command.aliases
      .split(', ')
      .map(
        (alias: string) =>
          `${alias && !alias.includes('many others') ? '!' : ''}${alias}`,
      )
      .join(', ')
    command.href = command.href.replace('https://cgbuen.io', '')
    return command
  })
  return new Response(JSON.stringify(response), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
