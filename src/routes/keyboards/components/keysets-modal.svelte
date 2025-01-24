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
  .single {
    background: rgba(0, 0, 0, 0.5);
    max-width: 35%;
    padding: 15px;
  }
  .background {
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: -1;
  }
</style>
