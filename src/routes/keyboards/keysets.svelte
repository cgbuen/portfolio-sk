<script lang="ts">
  import {debounce} from 'ts-debounce'
  import {page} from '$app/state'
  import {activeKeyset} from '$lib/state'
  import {GridSquare, TopSection} from './components'
  import type {Keyset} from '../api/keyboards/+server'
  import KeysetsList from './components/keysets-list.svelte'

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

  const openModal = (keyset: Keyset, i: number) => {
    return () => {
      activeKeyset.keyset = keyset
      activeKeyset.indexInDisplayedList = i
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
        'keysets-modal',
      ) as HTMLInputElement
      if (modalCheckbox) {
        modalCheckbox.checked = false
      }
    } else if (e.key === 'ArrowLeft') {
      const newIndex =
        (activeKeyset.indexInDisplayedList + displayedList.length - 1) %
        displayedList.length
      activeKeyset.keyset = displayedList[newIndex]
      activeKeyset.indexInDisplayedList = newIndex
    } else if (e.key === 'ArrowRight') {
      const newIndex =
        (activeKeyset.indexInDisplayedList + 1) % displayedList.length
      activeKeyset.keyset = displayedList[newIndex]
      activeKeyset.indexInDisplayedList = newIndex
    }
  }
</script>

<svelte:window on:keyup|preventDefault={onKeyUp} />

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
      {#each displayedList as keyset, i}
        <GridSquare
          onclick={openModal(keyset, i)}
          src={keyset.src}
          name={keyset.keyset}
          description="Purchased: {keyset.purchase_date}"
          labelFor="keysets-modal"
        />
      {/each}
      {#if displayedList.length % 3 === 2}
        <div style="width: 280px;"></div>
      {/if}
    {:else if displayedList.length > 0}
      <KeysetsList {displayedList} {openModal} />
    {/if}
    {#if displayedList.length === 0}
      <div class="">Select a filter above to see results.</div>
    {/if}
  </div>
</div>

<style>
</style>
