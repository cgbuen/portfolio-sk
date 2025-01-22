<script lang="ts">
  import {page} from '$app/state'
  import type {Keyset} from '../api/keyboards/+server'
  import KeysetsList from './keysets-list.svelte'
  import {GridSquare, TopSection} from './components'

  const {keysets} = page.data.collection
  let gridView = $state(false)
  let filters: {[key: string]: boolean} = $state({
    mounted: true,
    unused: true,
    onTheWay: true,
  })
  let displayedList: Keyset[] = $derived(
    Object.keys(filters)
      .filter((key) => filters[key])
      .reduce((acc, key) => acc.concat(keysets[key]), [])
      .toSorted((x: Keyset, y: Keyset) => {
        return y.purchase_date.localeCompare(x.purchase_date)
      }),
  )

  const openDialog = () => {
    return () => {}
  }

  const updateFilter = (filter: string) => {
    return () => {
      filters[filter] = !filters[filter]
    }
  }

  const toggleGridView = (option: boolean) => {
    return () => {
      gridView = option
    }
  }
</script>

<div>
  <TopSection
    {displayedList}
    {filters}
    {gridView}
    data={keysets}
    {toggleGridView}
    {updateFilter}
  />
  <div class="grid-container">
    {#if gridView}
      {#each displayedList as keyset}
        <GridSquare
          onclick={openDialog()}
          src={keyset.src}
          name={keyset.keyset}
          description="Purchased: {keyset.purchase_date}"
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
