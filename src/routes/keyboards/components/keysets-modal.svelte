<script lang="ts">
  import CloseIcon from 'virtual:icons/mdi/close.svg'
  import KeysetInfo from './keyset-info.svelte'
  let {activeKeyset} = $props()
</script>

<div>
  <input type="checkbox" id="keysets-modal" class="modal-toggle" />
  <div class="modal" role="dialog">
    <div class="modal-box max-w-6xl bg-teal-50 dark:bg-neutral-900">
      <label class="close" for="keysets-modal"><CloseIcon /></label>
      <h2>{activeKeyset.keyset?.keyset}</h2>
      <div class="modal-content-container">
        {#if activeKeyset.keyset}
          <div class="single">
            <KeysetInfo keyset={activeKeyset.keyset} />
          </div>
        {/if}
        <div
          class="background"
          style="background-image: url({activeKeyset.keyset?.src})"
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
