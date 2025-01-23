<script lang="ts">
  import {debounce} from 'ts-debounce'
  import {page} from '$app/state'
  import type {Keyset} from '../api/keyboards/+server'
  import KeysetsList from './keysets-list.svelte'
  import {GridSquare, TopSection} from './components'

  const {keysets} = page.data.collection
  let gridView = $state(false)
  let search = $state('')
  let filters: {[key: string]: boolean} = $state({
    mounted: true,
    unused: true,
    onTheWay: true,
    forSale: true,
  })
  let displayedList: Keyset[] = $derived(
    Object.keys(filters)
      .filter((key) => filters[key])
      .reduce((acc, key) => acc.concat(keysets[key]), [])
      .filter((keyset: Keyset) => {
        return (keyset.keyset ?? '')
          .toLowerCase()
          .includes((search ?? '').toLowerCase())
      })
      .toSorted((x: Keyset, y: Keyset) => {
        return y.purchase_date.localeCompare(x.purchase_date)
      }),
  )

  const openModal = () => {
    return () => {}
  }

  const updateFilter = (filter: string) => {
    return debounce(() => {
      filters[filter] = !filters[filter]
    }, 50)
  }

  const updateSearch = debounce((e: Event) => {
    const target = e.target as HTMLInputElement
    search = target.value
  }, 75)

  const toggleGridView = (option: boolean) => {
    return () => {
      gridView = option
    }
  }
</script>

<div>
  <TopSection
    data={keysets}
    {displayedList}
    {filters}
    {gridView}
    {updateFilter}
    {updateSearch}
    {toggleGridView}
  />
  <div class="grid-container">
    {#if gridView}
      {#each displayedList as keyset}
        <GridSquare
          onclick={openModal()}
          src={keyset.src}
          name={keyset.keyset}
          description="Purchased: {keyset.purchase_date}"
          labelFor="keyset-modal"
        />
      {/each}
      {#if displayedList.length % 3 === 2}
        <div style="width: 280px;"></div>
      {/if}
    {:else if displayedList.length > 0}
      <KeysetsList {displayedList} />
    {/if}
    {#if displayedList.length === 0}
      <div class="">Select a filter above to see results.</div>
    {/if}
  </div>
</div>

<style>
</style>
