<script>
  import {page} from '$app/state'
  import {PUBLIC_ASSET} from '$env/static/public'
  const EXCLUDE_WEIGHT = [
    'springswap',
    'alps',
    'matias',
    'halleffect',
    'buckling',
  ]
</script>

<div>
  <table class="img-table table">
    <thead>
      <tr>
        <td></td>
        <td>Name</td>
        <td>Purchased</td>
        <td>Mount</td>
        <td>Type</td>
        <td>Status</td>
        <td>Keyboard</td>
        <td>Weight</td>
      </tr>
    </thead>
    <tbody>
      {#each page.data.collection.switches as switchSet}
        <tr>
          <td
            ><img
              src="{PUBLIC_ASSET}/keyboards/unavailable.jpg"
              alt={switchSet.name}
              width="100"
              height="66.49"
            /></td
          >
          <td>{switchSet.name}</td>
          <td>{switchSet.purchase_date}</td>
          <td>{switchSet.mount}</td>
          <td>{switchSet.switch_type}</td>
          <td>{switchSet.mount_status}</td>
          <td>{switchSet.keyboard}</td>
          <td>
            {#if !EXCLUDE_WEIGHT.includes(switchSet.weight_springs)}
              {switchSet.weight_springs}
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  table tbody td {
    &:nth-child(3) {
      white-space: nowrap;
    }
  }
</style>
