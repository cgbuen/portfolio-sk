<script lang="ts">
  import SwitchesInfo from './switches-info.svelte'
  import {PUBLIC_ASSET} from '$env/static/public'
  import {Modal} from '$lib/components'
  let {activeSwitchset} = $props()
</script>

<Modal id="switches-modal" title={activeSwitchset.switchset?.name}>
  {#if activeSwitchset.switchset}
    <div class="single">
      <SwitchesInfo switchset={activeSwitchset.switchset} />
    </div>
  {/if}
  <div
    class="background"
    style="background-image: url({PUBLIC_ASSET}/keyboards/unavailable.jpg)"
  ></div>
</Modal>

<style>
</style>
