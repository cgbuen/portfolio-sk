<script>
  let {keyset} = $props()
</script>

<ul>
  <li>Purchase date: {keyset.purchase_date}</li>
  <li>Mount: {keyset.mount}</li>
  <li>Color: {keyset.color}</li>
  <li>Status: {keyset.mount_status}</li>
  {#if keyset.keyboard}
    <li>
      Current keyboard: {keyset.keyboard}
      {#if keyset.pictured && keyset.keyboard !== keyset.pictured}
        (pictured here on {keyset.pictured})
      {/if}
    </li>
  {:else if keyset.pictured}
    <li>Pictured keyset: {keyset.pictured}</li>
  {/if}
  <li>Notes: {keyset.notes}</li>
</ul>

<style>
  ul {
    padding: 0;
    margin-bottom: 0;
  }
</style>
