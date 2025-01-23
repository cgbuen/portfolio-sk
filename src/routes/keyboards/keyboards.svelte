<script lang="ts">
  import {debounce} from 'ts-debounce'
  import {page} from '$app/state'
  import {activeKeyboard} from '$lib/state/active-keyboard.svelte'
  import {GridSquare} from './components'
  import {useDate} from '$lib/helpers/useDate'
  import type {Keyboard} from '../api/keyboards/+server'
  import KeyboardsList from './keyboards-list.svelte'
  import TopSection from './components/top-section.svelte'

  const {keyboards} = page.data.collection
  let gridView = $state(true)
  let search = $state('')
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
      .filter((keyboard: Keyboard[]) => {
        return (keyboard[0]?.name ?? '')
          .toLowerCase()
          .includes((search ?? '').toLowerCase())
      })
      .toSorted((x: Keyboard[], y: Keyboard[]) => {
        return useDate(y).value.localeCompare(useDate(x).value)
      }),
  )

  const openModal = (buildSet: Keyboard[], i: number) => {
    return () => {
      activeKeyboard.keyboard = buildSet
      activeKeyboard.buildActive = 0
      activeKeyboard.indexInDisplayedList = i
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
        'keyboard-modal',
      ) as HTMLInputElement
      if (modalCheckbox) {
        modalCheckbox.checked = false
      }
    } else if (e.key === 'ArrowUp') {
      activeKeyboard.buildActive -= 1
      if (activeKeyboard.buildActive < 0) {
        activeKeyboard.buildActive = activeKeyboard.keyboard.length - 1
      }
    } else if (e.key === 'ArrowDown') {
      activeKeyboard.buildActive += 1
      if (activeKeyboard.buildActive >= activeKeyboard.keyboard.length) {
        activeKeyboard.buildActive = 0
      }
    } else if (e.key === 'ArrowLeft') {
      const newIndex =
        (activeKeyboard.indexInDisplayedList + displayedList.length - 1) %
        displayedList.length
      activeKeyboard.keyboard = displayedList[newIndex]
      activeKeyboard.indexInDisplayedList = newIndex
      activeKeyboard.buildActive = 0
    } else if (e.key === 'ArrowRight') {
      const newIndex =
        (activeKeyboard.indexInDisplayedList + 1) % displayedList.length
      activeKeyboard.keyboard = displayedList[newIndex]
      activeKeyboard.indexInDisplayedList = newIndex
      activeKeyboard.buildActive = 0
    }
  }
</script>

<svelte:window on:keyup|preventDefault={onKeyUp} />

<div>
  <TopSection
    data={keyboards}
    {displayedList}
    {filters}
    {gridView}
    {updateFilter}
    {updateSearch}
    {toggleGridView}
  />
  <div class="grid-container">
    {#if gridView}
      {#each displayedList as buildSet, i}
        <GridSquare
          onclick={openModal(buildSet, i)}
          src={buildSet[0].src}
          name={buildSet[0].name}
          description="{useDate(buildSet).label} {useDate(buildSet).value}"
          labelFor="keyboard-modal"
        />
      {/each}
      {#if displayedList.length % 3 === 2}
        <div style="width: 280px;"></div>
      {/if}
    {:else if displayedList.length > 0}
      <KeyboardsList {displayedList} {openModal} />
    {/if}
    {#if displayedList.length === 0}
      <div class="">Select a filter above to see results.</div>
    {/if}
  </div>
</div>

<style>
</style>
