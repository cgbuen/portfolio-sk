<script lang="ts">
  import {PUBLIC_ASSET} from '$env/static/public'
  import ClickableTd from './clickable-td.svelte'

  let {displayedList, openModal} = $props()
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
    {#each displayedList as switchset, i}
      <tr onclick={openModal(switchset, i)}>
        <ClickableTd labelFor="switches-modal">
          <img
            src="{PUBLIC_ASSET}/keyboards/unavailable.jpg"
            alt={switchset.name}
            width="100"
            height="66.49"
          />
        </ClickableTd>
        <ClickableTd labelFor="switches-modal">
          {switchset.name}
        </ClickableTd>
        <ClickableTd labelFor="switches-modal" style="white-space: nowrap">
          {switchset.purchase_date}
        </ClickableTd>
        <ClickableTd labelFor="switches-modal">{switchset.mount}</ClickableTd>
        <ClickableTd labelFor="switches-modal">
          {switchset.switch_type}
        </ClickableTd>
        <ClickableTd labelFor="switches-modal">
          {switchset.mount_status}
        </ClickableTd>
        <ClickableTd labelFor="switches-modal">
          {switchset.keyboard}
        </ClickableTd>
        <ClickableTd labelFor="switches-modal">
          {#if !EXCLUDE_WEIGHT.includes(switchset.weight_springs)}
            {switchset.weight_springs}
          {/if}
        </ClickableTd>
      </tr>
    {/each}
  </tbody>
</table>
