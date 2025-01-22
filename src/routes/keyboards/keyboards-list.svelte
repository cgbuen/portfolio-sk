<script>
  import ModalTd from './modal-td.svelte'
  import {useDate} from '$lib/useDate'
  const {displayedList, openDialog} = $props()
</script>

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
