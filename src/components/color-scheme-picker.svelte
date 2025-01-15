<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import LightModeIcon from '~icons/mdi/LightMode';
  import DarkModeIcon from '~icons/mdi/DarkMode';

  const isLightMode = writable(false);

  onMount(() => {
    const unsubscribe = isLightMode.subscribe(value => {
      document.body.classList.toggle('light-mode', value);
    });

    return () => {
      unsubscribe();
      document.body.classList.remove('light-mode');
    };
  });

  function toggleMode() {
    isLightMode.update(value => !value);
  }
</script>

<button class="icon-wrapper" on:click={toggleMode}>
  {#if $isLightMode}
    <DarkModeIcon height={0} />
  {:else}
    <LightModeIcon height={0} />
  {/if}
</button>

<style>
  .icon-wrapper {
    background: rgba(128, 128, 128, 0.5);
    border-radius: 5px;
    bottom: 25px;
    cursor: pointer;
    left: 25px;
    padding: 10px;
    position: fixed;
  }
  .icon-wrapper svg {
    display: block;
    height: 1em;
    width: 1em;
  }
</style>
