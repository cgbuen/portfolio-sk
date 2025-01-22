<script lang="ts">
  import {page} from '$app/state'
  import {activeKeyboard} from '$lib/active-keyboard.svelte'
  import FilterButton from '$lib/filter-button.svelte'
  import {useDate} from '$lib/useDate'
  import type {Keyboard} from '../api/keyboards/+server'
  import GridSquare from './grid-square.svelte'
  import GridIcon from 'virtual:icons/mdi/view-grid-outline'
  import ListIcon from 'virtual:icons/mdi/view-list'
  import ModalTd from './modal-td.svelte'

  const {keyboards} = page.data.collection
  let viewOption = $state(true)
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

  const toggleView = (option: boolean) => {
    return () => {
      viewOption = option
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
    <div class="view-options">
      <button
        class="view-option"
        aria-label="Grid view"
        onclick={toggleView(true)}
      >
        <GridIcon />
      </button>
      <button
        class="view-option"
        aria-label="List view"
        onclick={toggleView(false)}
      >
        <ListIcon />
      </button>
    </div>
    <div class="results-count">{displayedList.length} results</div>
  </div>
  <div class="content-container">
    {#if viewOption}
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
    {:else}
      <table class="img-table table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Type</th>
            <th>Builds</th>
            <th>Last built</th>
            <th>Plate</th>
            <th>Switches</th>
            <th>Keycaps</th>
          </tr>
        </thead>
        <tbody>
          {#each displayedList as buildSet}
            <tr class="list-build" onclick={openDialog(buildSet)}>
              <ModalTd labelFor="keyboard-modal" hasImg={true}>
                <img
                  src={buildSet[0].src}
                  alt={buildSet[0].name}
                  width="100"
                  height="6649"
                />
              </ModalTd>
              <ModalTd labelFor="keyboard-modal">{buildSet[0].name}</ModalTd>
              <ModalTd labelFor="keyboard-modal" style="text-align: center">
                {buildSet[0].type}
              </ModalTd>
              <ModalTd labelFor="keyboard-modal" style="text-align: center">
                {buildSet.length}
              </ModalTd>
              <ModalTd labelFor="keyboard-modal" style="white-space: nowrap">
                {useDate(buildSet).value}
              </ModalTd>
              <ModalTd labelFor="keyboard-modal">{buildSet[0].plate}</ModalTd>
              <ModalTd labelFor="keyboard-modal">
                {buildSet[0].switches}
              </ModalTd>
              <ModalTd labelFor="keyboard-modal">{buildSet[0].keycaps}</ModalTd>
            </tr>
          {/each}
        </tbody>
      </table>
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
