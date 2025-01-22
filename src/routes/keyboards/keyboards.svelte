<script lang="ts">
  import {page} from '$app/state'
  import {activeKeyboard} from '$lib/active-keyboard.svelte'
  import FilterButton from '$lib/filter-button.svelte'
  import {useDate} from '$lib/useDate'
  import type {Keyboard} from '../api/keyboards/+server'
  import GridSquare from './grid-square.svelte'

  const {keyboards} = page.data.collection
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
</script>

<div>
  <div class="top-section">
    <div class="filter-section-wrapper">
      <div class="filter-label">Filters</div>
      <div class="filter-section">
        {#each ['built', 'unbuilt', 'onTheWay', 'forSale'] as filter}
          <FilterButton
            name={filter}
            count={keyboards[filter].length}
            active={filters[filter]}
            onclick={updateFilter(filter)}
          />
        {/each}
      </div>
    </div>
    <div class="results-count">{displayedList.length} results</div>
  </div>
  <div class="content-container">
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
  .results-count {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 15px;
    text-align: right;
    white-space: nowrap;
  }
  .filter-section-wrapper {
    display: flex;
    margin-bottom: 10px;
  }
  .filter-label {
    display: inline-block;
    font-weight: bold;
    margin: 6px 15px 0 0;
  }
</style>
