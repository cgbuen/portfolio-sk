<script>
  import ClickableTd from './clickable-td.svelte'
  let {displayedList, openModal} = $props()
  const legendQuality = [, 'Low', 'Acceptable', 'High']
</script>

<table class="img-table table">
  <thead>
    <tr>
      <th></th>
      <th class="text-neutral-900 dark:text-white">Name</th>
      <th class="hide-mobile text-neutral-900 dark:text-white">Date</th>
      <th class="hide-tablet text-neutral-900 dark:text-white">Type</th>
      <th class="hide-mobile text-neutral-900 dark:text-white">Status</th>
      <th class="text-neutral-900 dark:text-white">Keyboard</th>
      <th class="hide-tablet text-neutral-900 dark:text-white">6UC</th>
      <th class="hide-tablet text-neutral-900 dark:text-white">6UO</th>
      <th class="hide-tablet text-neutral-900 dark:text-white">Quality</th>
    </tr>
  </thead>
  <tbody>
    {#each displayedList as keyset, i}
      <tr onclick={openModal(keyset, i)}>
        <ClickableTd labelFor="keysets-modal">
          <img
            src={keyset.src}
            alt={keyset.keyset}
            width="100"
            height="66.49"
          />
        </ClickableTd>
        <ClickableTd labelFor="keysets-modal">{keyset.keyset}</ClickableTd>
        <ClickableTd
          labelFor="keysets-modal"
          style="white-space: nowrap"
          hideMobile
        >
          {keyset.purchase_date}
        </ClickableTd>
        <ClickableTd labelFor="keysets-modal" hideTablet>
          {keyset.mount}
        </ClickableTd>
        <ClickableTd labelFor="keysets-modal" hideMobile>
          {keyset.mount_status}
        </ClickableTd>
        <ClickableTd labelFor="keysets-modal">{keyset.keyboard}</ClickableTd>
        <ClickableTd
          labelFor="keysets-modal"
          style="text-align: center"
          hideTablet
        >
          {keyset.u6_center}
        </ClickableTd>
        <ClickableTd
          labelFor="keysets-modal"
          style="text-align: center"
          hideTablet
        >
          {keyset.u6_off}
        </ClickableTd>
        <ClickableTd
          labelFor="keysets-modal"
          style="text-align: center"
          hideTablet
        >
          {legendQuality[keyset.lq]}
        </ClickableTd>
      </tr>
    {/each}
  </tbody>
</table>

<style>
</style>
