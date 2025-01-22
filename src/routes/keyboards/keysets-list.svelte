<script>
  import {ClickableTd} from './components'
  let {displayedList} = $props()
  const legendQuality = [, 'Low', 'Acceptable', 'High']
</script>

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
    {#each displayedList as keyset}
      <tr>
        <ClickableTd labelFor="keyset-modal">
          <img
            src={keyset.src}
            alt={keyset.keyset}
            width="100"
            height="66.49"
          />
        </ClickableTd>
        <ClickableTd labelFor="keyset-modal">{keyset.keyset}</ClickableTd>
        <ClickableTd labelFor="keyset-modal" style="white-space: nowrap">
          {keyset.purchase_date}
        </ClickableTd>
        <ClickableTd labelFor="keyset-modal">{keyset.mount}</ClickableTd>
        <ClickableTd labelFor="keyset-modal">{keyset.mount_status}</ClickableTd>
        <ClickableTd labelFor="keyset-modal">{keyset.keyboard}</ClickableTd>
        <ClickableTd labelFor="keyset-modal" style="text-align: center">
          {keyset.u6_center}
        </ClickableTd>
        <ClickableTd labelFor="keyset-modal" style="text-align: center">
          {keyset.u6_off}
        </ClickableTd>
        <ClickableTd labelFor="keyset-modal" style="text-align: center">
          {legendQuality[keyset.lq]}
        </ClickableTd>
      </tr>
    {/each}
  </tbody>
</table>
