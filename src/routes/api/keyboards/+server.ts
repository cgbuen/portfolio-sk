import {PUBLIC_ASSET} from '$env/static/public'

interface Build {
  src: string
  name: string
  build_status: string
  assembly_variant: string
  date_built_latest: string
  date_bought: string
  loaded: boolean
  displayed: boolean
}

interface Keyset {
  src: string
  name: string
  mount_status: string
  purchase_date: string
}

interface Switchset {
  src: string
  name: string
  mount_status: string
  purchase_date: string
}

export async function GET({url}) {
  const filter = 'Built'
  const requests = []
  requests.push(fetch(`${PUBLIC_ASSET}/keyboards/collection.json`))
  requests.push(fetch(`${PUBLIC_ASSET}/keyboards/keysets.json`))
  requests.push(fetch(`${PUBLIC_ASSET}/keyboards/switches.json`))
  const responses = await Promise.all(requests)

  const buildsResponse = await responses[0].json()
  const builds = buildsResponse
    .map((build: Build) => {
      build.src = `${PUBLIC_ASSET}/keyboards/${build.src}.jpg?${Date.now()}`
      if (
        build.assembly_variant.includes('A') &&
        build.build_status === filter
      ) {
        build.loaded = true
        build.displayed = true
      }
      return build
    })
    .sort((x: Build, y: Build) => {
      const useDateX = ['TBD', 'N/A'].includes(x.date_built_latest)
        ? x.date_bought
        : x.date_built_latest
      const useDateY = ['TBD', 'N/A'].includes(y.date_built_latest)
        ? y.date_bought
        : y.date_built_latest
      return useDateX.localeCompare(useDateY)
    })
    .reverse()

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
    builds,
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
