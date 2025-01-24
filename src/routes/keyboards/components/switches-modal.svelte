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
