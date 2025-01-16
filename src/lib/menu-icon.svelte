<script>
import Hamburger from 'virtual:icons/mdi/menu'
import Close from 'virtual:icons/mdi/close'
import { scale } from 'svelte/transition';

let { open } = $props()
</script>

<div class="icon-wrapper">
  {#if open}
    <div
      class="icon close {open ? '' : 'hidden'}"
      in:scale={{duration: 150}}
      out:scale={{duration: 150}}
    >
      <Close />
    </div>
  {:else}
    <div
      class="icon hamburger {open ? 'hidden' : ''}"
      in:scale={{duration: 150}}
      out:scale={{duration: 150}}
    >
      <Hamburger />
    </div>
  {/if}
</div>

<style>
  .icon-wrapper {
    position: relative;
  }
  .icon {
    height: 24px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
  }
</style>