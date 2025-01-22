<script lang="ts">
  import {page} from '$app/state'
  import {activeKeyboard} from '$lib/state/active-keyboard.svelte'
  import {FilterButton, GridSquare} from './components'
  import {useDate} from '$lib/helpers/useDate'
  import type {Keyboard} from '../api/keyboards/+server'
  import GridIcon from 'virtual:icons/mdi/view-grid-outline'
  import ListIcon from 'virtual:icons/mdi/view-list'
  import KeyboardsList from './keyboards-list.svelte'

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
  <div class="top-section">
    <div class="filter-section-wrapper">
      <div class="filter-label">Filters:</div>
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
    <div class="view-options">
      <button
        class="view-option {gridView ? 'active' : ''}"
        onclick={toggleGridView(true)}
      >
        <GridIcon />
      </button>
      <button
        class="view-option {gridView ? '' : 'active'}"
        onclick={toggleGridView(false)}
      >
        <ListIcon />
      </button>
    </div>
  </div>
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
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  .content-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .results-count {
    font-size: 18px;
    font-weight: bold;
    text-align: right;
    white-space: nowrap;
    flex: 1;
    justify-content: end;
    margin-right: 10px;
  }
  .view-options {
    display: flex;
  }
  .view-option {
    display: block;
    height: 24px;
    opacity: 0.25;
    width: 24px;
    &.active {
      opacity: 1;
    }
  }
  .filter-section-wrapper {
    display: flex;
  }
  .filter-label {
    display: inline-block;
    font-weight: bold;
    margin-top: 6px;
  }
</style>
