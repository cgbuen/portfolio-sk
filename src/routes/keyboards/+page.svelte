<script lang="ts">
  import {getContext} from 'svelte'
  import {page} from '$app/state'
  import {PUBLIC_DISCORD_P, PUBLIC_TWITCH} from '$env/static/public'
  import Keyboards from './keyboards.svelte'
  import Keysets from './keysets.svelte'
  import Switches from './switches.svelte'
</script>

<svelte:head>
  <title>Keyboards{getContext('titleSuffix')}</title>
</svelte:head>

<div class="keyboards-container">
  <h1>Keyboards</h1>
  <p>
    Below is my personal collection of computer keyboards (primarily in
    HHKB-inspired layouts), along with accompanying keysets and switches. I
    stream my build process to <a href={PUBLIC_TWITCH} target="_blank">Twitch</a
    >.
  </p>
  <p>
    For more information on items that are for sale, DM me on Discord ({PUBLIC_DISCORD_P}).
  </p>
  <p><i>Last updated: {page.data.collection.date} GMT</i></p>

  <div role="tablist" class="tabs">
    <input
      type="radio"
      name="keyboard-tab"
      role="tab"
      class="tab text-neutral-900 dark:text-white"
      aria-label="Keyboards"
      checked
    />
    <div role="tabpanel" class="tab-content">
      <Keyboards />
    </div>

    <input
      type="radio"
      name="keyboard-tab"
      role="tab"
      class="tab text-neutral-900 dark:text-white"
      aria-label="Keysets"
    />
    <div role="tabpanel" class="tab-content">
      <Keysets />
    </div>

    <input
      type="radio"
      name="keyboard-tab"
      role="tab"
      class="tab text-neutral-900 dark:text-white"
      aria-label="Switches"
    />
    <div role="tabpanel" class="tab-content">
      <Switches />
    </div>
  </div>
</div>

<style>
  .tab {
    font-size: 18px;
    font-weight: bold;
    height: auto;
    margin-right: 10px;
    padding: 10px 20px;
    &:is(input:checked) {
      background: #69c;
    }
  }
  .tab-content {
    border-top: 2px solid #69c;
    padding-top: 15px;
  }
</style>
