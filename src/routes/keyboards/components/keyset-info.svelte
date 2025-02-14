<script>
  import {showable} from '$lib/helpers/showable'
  let {keyset} = $props()
</script>

<ul>
  <li>Purchase date: {keyset.purchase_date}</li>
  <li>Mount: {keyset.mount}</li>
  <li>Color: {keyset.color}</li>
  <li>Status: {keyset.mount_status}</li>
  {#if showable(keyset.keyboard)}
    <li>
      Current keyboard: {keyset.keyboard}
      {#if keyset.pictured && keyset.keyboard !== keyset.pictured}
        (pictured here on {keyset.pictured})
      {/if}
    </li>
  {:else if showable(keyset.pictured)}
    <li>Pictured keyset: {keyset.pictured}</li>
  {/if}
  {#if showable(keyset.notes)}
    <li>Notes: {keyset.notes}</li>
  {/if}
</ul>

<style>
  ul {
    padding: 0;
    margin-bottom: 0;
  }
</style>
