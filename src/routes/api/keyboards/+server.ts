import {PUBLIC_ASSET} from '$env/static/public'

export interface Keyboard {
  id: string
  board_id: string
  src: string
  name: string
  type: string
  build_status: string
  assembly_variant: string
  date_built: string
  date_built_latest: string
  date_bought: string
  plate: string
  switches: string
  keycaps: string
}

export interface Keyset {
  src: string
  name: string
  mount_status: string
  purchase_date: string
}

export interface Switchset {
  src: string
  name: string
  mount_status: string
  purchase_date: string
}

const NOT_YET_BUILT = ['TBD', 'N/A']

export async function GET({url}) {
  const requests = []
  requests.push(fetch(`${PUBLIC_ASSET}/keyboards/collection.json`))
  requests.push(fetch(`${PUBLIC_ASSET}/keyboards/keysets.json`))
  requests.push(fetch(`${PUBLIC_ASSET}/keyboards/switches.json`))
  const responses = await Promise.all(requests)

  const keyboardsResponse = await responses[0].json()
  const keyboardsToCopyFrom = keyboardsResponse
    .filter((keyboard: Keyboard) => parseInt(keyboard.id) < 5000)
    .sort((x: Keyboard, y: Keyboard) => {
      const useDateX = NOT_YET_BUILT.includes(x.date_built_latest)
        ? x.date_bought
        : x.date_built_latest
      const useDateY = NOT_YET_BUILT.includes(y.date_built_latest)
        ? y.date_bought
        : y.date_built_latest
      return useDateX.localeCompare(useDateY)
    })
    .map((keyboard: Keyboard) => {
      keyboard.src = `${PUBLIC_ASSET}/keyboards/${keyboard.src}.jpg`
      return keyboard
    })

  const keyboardsArray = [...keyboardsToCopyFrom]
    .filter((build: Keyboard) => build.assembly_variant.includes('A'))
    .map((keyboard: Keyboard) => [keyboard])
    .map((buildSet: Keyboard[]) => [
      ...buildSet,
      ...keyboardsToCopyFrom.filter(
        (origKeyboard: Keyboard) =>
          !origKeyboard.assembly_variant.includes('A') &&
          buildSet[0].board_id === origKeyboard.board_id,
      ),
    ])
    .reverse()

  const keyboards = {
    built: keyboardsArray.filter(
      (buildSet: Keyboard[]) =>
        typeof buildSet.find((x: Keyboard) => x.build_status === 'Built') !==
        'undefined',
    ),
    unbuilt: keyboardsArray
      .filter(
        (buildSet: Keyboard[]) =>
          !['For sale', 'On the way'].includes(buildSet[0].build_status),
      )
      .filter(
        (buildSet: Keyboard[]) =>
          typeof buildSet.find((x: Keyboard) => x.build_status === 'Built') ===
          'undefined',
      ),
    onTheWay: keyboardsArray.filter(
      (buildSet: Keyboard[]) =>
        typeof buildSet.find(
          (x: Keyboard) => x.build_status === 'On the way',
        ) !== 'undefined',
    ),
    forSale: keyboardsArray.filter(
      (buildSet: Keyboard[]) =>
        typeof buildSet.find((x: Keyboard) => x.build_status === 'For sale') !==
        'undefined',
    ),
  }

  const keysetsResponse = await responses[1].json()
  let keysets = keysetsResponse
    .filter((keyset: Keyset) =>
      ['Mounted', 'Unused'].includes(keyset.mount_status),
    )
    .map((keyset: Keyset) => {
      keyset.src = `${PUBLIC_ASSET}/keyboards/${keyset.src}.jpg`
      return keyset
    })
    .sort((x: Keyset, y: Keyset) => {
      return x.purchase_date.localeCompare(y.purchase_date)
    })
    .reverse()

  const switchesResponse = await responses[2].json()
  let switches = switchesResponse
    .filter((switchset: Switchset) =>
      ['Tune', 'Ready', 'Mounted', 'Re-tune'].includes(switchset.mount_status),
    )
    .sort((x: Switchset, y: Switchset) => {
      return x.purchase_date.localeCompare(y.purchase_date)
    })
    .reverse()

  const dates = responses.map((x) =>
    new Date(x.headers.get('Last-Modified') ?? 0).valueOf(),
  )

  if (url.searchParams.get('keyset_mount_status') === 'unused') {
    keysets = [...keysets].reverse().sort((x) => {
      return x.mount_status === 'Unused' ? -1 : 1
    })
  }
  if (url.searchParams.get('switch_mount_status') === 'ready') {
    switches = [...switches].reverse().sort((x) => {
      return x.mount_status === 'Ready' ? -1 : 1
    })
  }
  if (url.searchParams.get('switch_mount_status') === 'tunable') {
    switches = [...switches].reverse().sort((x) => {
      return ['Tune', 'Re-tune'].includes(x.mount_status) ? -1 : 1
    })
  }

  const response = {
    keyboards,
    keysets,
    switches,
    date: new Date(
      dates.reduce((a, b) => Math.max(a, b), -Infinity),
    ).toLocaleString(),
  }

  return new Response(JSON.stringify(response), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
