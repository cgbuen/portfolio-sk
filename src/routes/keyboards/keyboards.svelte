<script lang="ts">
  import {page} from '$app/state'
  import {activeKeyboard} from '$lib/active-keyboard.svelte'
  import type {Keyboard} from '../api/keyboards/+server'
  import GridSquare from './grid-square.svelte'

  const {keyboards} = page.data.collection
  let filters: {[key: string]: boolean} = {built: true, unbuilt: false, onTheWay: false, forSale: false}
  let displayedList = $state(keyboards.built)

  const openDialog = (buildSet: Keyboard[]) => {
    return () => {
      activeKeyboard.keyboard = buildSet
      activeKeyboard.buildActive = 0
    }
  }
  
  const updateFilter = (filter: string) => {
    return () => {
      filters[filter] = !filters[filter]
      displayedList = Object.keys(filters)
        .filter(key => filters[key])
        .reduce(
          (acc, key) => acc.concat(keyboards[key]), []
        )
    }
  }
</script>

<div>
  <div class="top-section">
    <div class="filter-section-wrapper">
      <div class="filter-label">Filters</div>
      <div class="filter-section">
        <button class="filter-label" onclick={updateFilter('built')}>Built</button>
        <button class="filter-label" onclick={updateFilter('unbuilt')}>Unbuilt</button>
        <button class="filter-label" onclick={updateFilter('onTheWay')}>On the way</button>
        <button class="filter-label" onclick={updateFilter('forSale')}>For sale</button>  
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
        description={buildSet[0].date_built_latest}
      />
    {/each}
  </div>
</div>

<style>
  .content-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 -10px;
  }
  .results-count {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 15px;
    text-align: right;
    white-space: nowrap;
  }
</style>
