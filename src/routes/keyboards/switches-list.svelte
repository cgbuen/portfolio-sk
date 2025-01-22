<script lang="ts">
  import {PUBLIC_ASSET} from '$env/static/public'
  import ModalTd from './components/clickable-td.svelte'

  let {displayedList} = $props()
  const EXCLUDE_WEIGHT = [
    'springswap',
    'alps',
    'matias',
    'halleffect',
    'buckling',
  ]
</script>

<table class="img-table table">
  <thead>
    <tr>
      <th></th>
      <th class="text-neutral-900 dark:text-white">Name</th>
      <th class="text-neutral-900 dark:text-white">Purchased</th>
      <th class="text-neutral-900 dark:text-white">Mount</th>
      <th class="text-neutral-900 dark:text-white">Type</th>
      <th class="text-neutral-900 dark:text-white">Status</th>
      <th class="text-neutral-900 dark:text-white">Keyboard</th>
      <th class="text-neutral-900 dark:text-white">Weight</th>
    </tr>
  </thead>
  <tbody>
    {#each displayedList as switchSet}
      <tr>
        <ModalTd labelFor="switches-modal">
          <img
            src="{PUBLIC_ASSET}/keyboards/unavailable.jpg"
            alt={switchSet.name}
            width="100"
            height="66.49"
          />
        </ModalTd>
        <ModalTd labelFor="switches-modal">{switchSet.name}</ModalTd>
        <ModalTd labelFor="switches-modal" style="white-space: nowrap">
          {switchSet.purchase_date}
        </ModalTd>
        <ModalTd labelFor="switches-modal">{switchSet.mount}</ModalTd>
        <ModalTd labelFor="switches-modal">{switchSet.switch_type}</ModalTd>
        <ModalTd labelFor="switches-modal">{switchSet.mount_status}</ModalTd>
        <ModalTd labelFor="switches-modal">{switchSet.keyboard}</ModalTd>
        <ModalTd labelFor="switches-modal">
          {#if !EXCLUDE_WEIGHT.includes(switchSet.weight_springs)}
            {switchSet.weight_springs}
          {/if}
        </ModalTd>
      </tr>
    {/each}
  </tbody>
</table>
