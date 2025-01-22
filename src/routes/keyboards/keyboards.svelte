<script lang="ts">
  import {page} from '$app/state'
  import {activeKeyboard} from '$lib/state/active-keyboard.svelte'
  import {GridSquare} from './components'
  import {useDate} from '$lib/helpers/useDate'
  import type {Keyboard} from '../api/keyboards/+server'
  import KeyboardsList from './keyboards-list.svelte'
  import TopSection from './components/top-section.svelte'

  const {keyboards} = page.data.collection
  let gridView = $state(true)
  let filters: {[key: string]: boolean} = $state({
    built: true,
    unbuilt: false,
    onTheWay: false,
    forSale: false,
  })
  let displayedList: Keyboard[][] = $derived(
    Object.keys(filters)
      .filter((key) => filters[key])
      .reduce((acc, key) => acc.concat(keyboards[key]), [])
      .toSorted((x: Keyboard[], y: Keyboard[]) => {
        return useDate(y).value.localeCompare(useDate(x).value)
      }),
  )

  const openDialog = (buildSet: Keyboard[]) => {
    return () => {
      activeKeyboard.keyboard = buildSet
      activeKeyboard.buildActive = 0
    }
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
    {keyboards}
    {toggleGridView}
    {updateFilter}
  />
  <div class="content-container">
    {#if gridView}
      {#each displayedList as buildSet}
        <GridSquare
          onclick={openDialog(buildSet)}
          src={buildSet[0].src}
          name={buildSet[0].name}
          description="{useDate(buildSet).label} {useDate(buildSet).value}"
        />
      {/each}
      {#if displayedList.length % 3 === 2}
        <div style="width: 280px;"></div>
      {/if}
    {:else if displayedList.length > 0}
      <KeyboardsList {displayedList} {openDialog} />
    {/if}
    {#if displayedList.length === 0}
      <div class="">Select a filter above to see results.</div>
    {/if}
  </div>
</div>

<style>
  .content-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
