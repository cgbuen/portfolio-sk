<script lang="ts">
  import {debounce} from 'ts-debounce'
  import {page} from '$app/state'
  import {activeSwitchset} from '$lib/state'
  import {GridSquare, TopSection} from './components'
  import type {Switchset} from '../api/keyboards/+server'
  import SwitchesList from './components/switches-list.svelte'
  import {PUBLIC_ASSET} from '$env/static/public'

  const {switches} = page.data.collection
  let gridView = $state(false)
  let search = $state('')
  let filters: {[key: string]: boolean} = $state({
    mounted: true,
    ready: true,
    tune: true,
  })
  let displayedList: Switchset[] = $derived(
    Object.keys(filters)
      .filter((key) => filters[key])
      .reduce((acc, key) => acc.concat(switches[key]), [])
      .filter((switchset: Switchset) => {
        return (switchset.name ?? '')
          .toLowerCase()
          .includes((search ?? '').toLowerCase())
      })
      .toSorted((x: Switchset, y: Switchset) => {
        return y.purchase_date.localeCompare(x.purchase_date)
      }),
  )

  const openModal = (switchset: Switchset, i: number) => {
    return () => {
      activeSwitchset.switchset = switchset
      activeSwitchset.indexInDisplayedList = i
    }
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

  const onKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      const modalCheckbox = document.getElementById(
        'switches-modal',
      ) as HTMLInputElement
      if (modalCheckbox) {
        modalCheckbox.checked = false
      }
    } else if (e.key === 'ArrowLeft') {
      const newIndex =
        (activeSwitchset.indexInDisplayedList + displayedList.length - 1) %
        displayedList.length
      activeSwitchset.switchset = displayedList[newIndex]
      activeSwitchset.indexInDisplayedList = newIndex
    } else if (e.key === 'ArrowRight') {
      const newIndex =
        (activeSwitchset.indexInDisplayedList + 1) % displayedList.length
      activeSwitchset.switchset = displayedList[newIndex]
      activeSwitchset.indexInDisplayedList = newIndex
    }
  }
</script>

<svelte:window on:keyup|preventDefault={onKeyUp} />

<div>
  <TopSection
    data={switches}
    {displayedList}
    {filters}
    {gridView}
    {toggleGridView}
    {updateSearch}
    {updateFilter}
  />
  <div class="grid-container">
    {#if gridView}
      {#each displayedList as switchset, i}
        <GridSquare
          onclick={openModal(switchset, i)}
          src="{PUBLIC_ASSET}/keyboards/unavailable.jpg"
          name={switchset.name}
          description="Purchased: {switchset.purchase_date}"
          labelFor="switches-modal"
        />
      {/each}
      {#if displayedList.length % 3 === 2}
        <div style="width: 280px;"></div>
      {/if}
    {:else if displayedList.length > 0}
      <SwitchesList {displayedList} {openModal} />
    {/if}
    {#if displayedList.length === 0}
      <div class="">Select a filter above to see results.</div>
    {/if}
  </div>
</div>

<style>
</style>
