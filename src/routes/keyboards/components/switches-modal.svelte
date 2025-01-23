<script lang="ts">
  import CloseIcon from 'virtual:icons/mdi/close.svg'
  import SwitchesInfo from './switches-info.svelte'
  import {PUBLIC_ASSET} from '$env/static/public'
  let {activeSwitchset} = $props()
</script>

<div>
  <input type="checkbox" id="switches-modal" class="modal-toggle" />
  <div class="modal" role="dialog">
    <div class="modal-box max-w-6xl bg-teal-50 dark:bg-neutral-900">
      <label class="close" for="switches-modal"><CloseIcon /></label>
      <h2>{activeSwitchset.switchset?.name}</h2>
      <div class="modal-content-container">
        {#if activeSwitchset.switchset}
          <div class="single">
            <SwitchesInfo switchset={activeSwitchset.switchset} />
          </div>
        {/if}
        <div
          class="background"
          style="background-image: url({PUBLIC_ASSET}/keyboards/unavailable.jpg)"
        ></div>
      </div>
    </div>
  </div>
</div>

<style>
  .modal-box {
    border-radius: 0;
    padding: 20px;
    position: relative;
  }
  .close {
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 15px;
  }
  .modal-content-container {
    color: white;
    min-height: 450px;
    padding: 15px;
    position: relative;
  }
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
