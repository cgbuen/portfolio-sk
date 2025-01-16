<script lang="ts">
  import { browser } from '$app/environment';
  import LightModeIcon from 'virtual:icons/mdi/white-balance-sunny';
  import DarkModeIcon from 'virtual:icons/mdi/weather-night';

  let lightMode: boolean;

  if (browser) {
    lightMode = localStorage.getItem('lightMode') === 'true'
  }

  function toggleMode() {
    lightMode = !lightMode
		localStorage.setItem('lightMode', `${lightMode}`);
    document.documentElement.classList.toggle('dark');
    document.documentElement.classList.toggle('light');
  }

</script>

<button class="icon-wrapper" onclick={toggleMode}>
  {#if lightMode}
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
</style>
