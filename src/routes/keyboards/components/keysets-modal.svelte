<script lang="ts">
  import KeysetInfo from './keyset-info.svelte'
  import {Modal} from '$lib/components'
  let {activeKeyset} = $props()
</script>

<Modal id="keysets-modal" title={activeKeyset.keyset?.keyset}>
  {#if activeKeyset.keyset}
    <div class="single">
      <KeysetInfo keyset={activeKeyset.keyset} />
    </div>
  {/if}
  <div
    class="background"
    style="background-image: url({activeKeyset.keyset?.src})"
  ></div>
</Modal>

<style>
</style>
