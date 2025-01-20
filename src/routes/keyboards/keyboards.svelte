<script lang="ts">
  import {page} from '$app/state'
  import { activeKeyboard } from '$lib/active-keyboard.svelte'
  import type {Keyboard} from '../api/keyboards/+server'
  import GridSquare from './grid-square.svelte'

  const built = page.data.collection.keyboards.built
  const unbuilt = page.data.collection.keyboards.unbuilt
  const onTheWay = page.data.collection.keyboards.onTheWay
  const forSale = page.data.collection.keyboards.forSale
  const displayedList = $state(built)
  let modal: HTMLDialogElement

  const openDialog = (buildSet: Keyboard[]) => {
    return () => {
      console.log(buildSet[0])
    }
  }
</script>

<div>
  <div>Filters:</div>
  <div>Grid List</div>
  {displayedList.length} results
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
</style>
