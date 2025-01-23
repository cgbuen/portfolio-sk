<script>
  import ClickableTd from './clickable-td.svelte'
  import {useDate} from '$lib/helpers/useDate'
  const {displayedList, openModal} = $props()
</script>

<table class="img-table table">
  <thead>
    <tr>
      <th></th>
      <th class="text-neutral-900 dark:text-white">Name</th>
      <th class="text-neutral-900 dark:text-white">Type</th>
      <th class="text-neutral-900 dark:text-white">Builds</th>
      <th class="text-neutral-900 dark:text-white">Last built</th>
      <th class="text-neutral-900 dark:text-white">Plate</th>
      <th class="text-neutral-900 dark:text-white">Switches</th>
      <th class="text-neutral-900 dark:text-white">Keycaps</th>
    </tr>
  </thead>
  <tbody>
    {#each displayedList as buildSet, i}
      <tr class="list-build" onclick={openModal(buildSet, i)}>
        <ClickableTd labelFor="keyboards-modal" hasImg={true}>
          <img
            src={buildSet[0].src}
            alt={buildSet[0].name}
            width="100"
            height="66.49"
          />
        </ClickableTd>
        <ClickableTd labelFor="keyboards-modal">{buildSet[0].name}</ClickableTd>
        <ClickableTd labelFor="keyboards-modal" style="text-align: center">
          {buildSet[0].type}
        </ClickableTd>
        <ClickableTd labelFor="keyboards-modal" style="text-align: center">
          {buildSet.length}
        </ClickableTd>
        <ClickableTd labelFor="keyboards-modal" style="white-space: nowrap">
          {useDate(buildSet).value}
        </ClickableTd>
        <ClickableTd labelFor="keyboards-modal">{buildSet[0].plate}</ClickableTd
        >
        <ClickableTd labelFor="keyboards-modal">
          {buildSet[0].switches}
        </ClickableTd>
        <ClickableTd labelFor="keyboards-modal"
          >{buildSet[0].keycaps}</ClickableTd
        >
      </tr>
    {/each}
  </tbody>
</table>
