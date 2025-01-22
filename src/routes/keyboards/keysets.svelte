<script>
  import {page} from '$app/state'
  import ModalTd from './components/modal-td.svelte'
  const legendQuality = [, 'Low', 'Acceptable', 'High']
</script>

<div>
  <table class="img-table table">
    <thead>
      <tr>
        <th></th>
        <th class="text-neutral-900 dark:text-white">Name</th>
        <th class="text-neutral-900 dark:text-white">Date</th>
        <th class="text-neutral-900 dark:text-white">Type</th>
        <th class="text-neutral-900 dark:text-white">Status</th>
        <th class="text-neutral-900 dark:text-white">Keyboard</th>
        <th class="text-neutral-900 dark:text-white">6UC</th>
        <th class="text-neutral-900 dark:text-white">6UO</th>
        <th class="text-neutral-900 dark:text-white">Quality</th>
      </tr>
    </thead>
    <tbody>
      {#each page.data.collection.keysets as keyset}
        <tr>
          <ModalTd labelFor="keyset-modal">
            <img
              src={keyset.src}
              alt={keyset.keyset}
              width="100"
              height="66.49"
            />
          </ModalTd>
          <ModalTd labelFor="keyset-modal">{keyset.keyset}</ModalTd>
          <ModalTd labelFor="keyset-modal" style="white-space: nowrap">
            {keyset.purchase_date}
          </ModalTd>
          <ModalTd labelFor="keyset-modal">{keyset.mount}</ModalTd>
          <ModalTd labelFor="keyset-modal">{keyset.mount_status}</ModalTd>
          <ModalTd labelFor="keyset-modal">{keyset.keyboard}</ModalTd>
          <ModalTd labelFor="keyset-modal" style="text-align: center">
            {keyset.u6_center}
          </ModalTd>
          <ModalTd labelFor="keyset-modal" style="text-align: center">
            {keyset.u6_off}
          </ModalTd>
          <ModalTd labelFor="keyset-modal" style="text-align: center">
            {legendQuality[keyset.lq]}
          </ModalTd>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
</style>
