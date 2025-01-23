<script>
  let {switchset} = $props()
</script>

<ul>
  <li>Purchase date: {switchset.purchase_date}</li>
  <li>Mount: {switchset.mount}</li>
  <li>Status: {switchset.mount_status}</li>
  <li>Weight: {switchset.weight_springs}</li>
  {#if switchset.keyboard}
    <li>Keyboard: {switchset.keyboard}</li>
  {/if}
</ul>

<style>
  ul {
    padding: 0;
    margin-bottom: 0;
  }
</style>
