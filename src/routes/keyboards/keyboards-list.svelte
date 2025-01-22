<script>
  import {ModalTd} from './components'
  import {useDate} from '$lib/helpers/useDate'
  const {displayedList, openDialog} = $props()
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
    {#each displayedList as buildSet}
      <tr class="list-build" onclick={openDialog(buildSet)}>
        <ModalTd labelFor="keyboard-modal" hasImg={true}>
          <img
            src={buildSet[0].src}
            alt={buildSet[0].name}
            width="100"
            height="66.49"
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
