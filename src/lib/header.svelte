<script>
  import {page} from '$app/state'
  import { getContext } from 'svelte';
  import MenuIcon from './menu-icon.svelte';

  let items = getContext('items')
  let innerWidth = $state(0)

  let { open, toggleOpen } = $props()

</script>

<svelte:window bind:innerWidth />

<div class="app-bar-styled">
  <div class="app-bar-inner bg-white dark:bg-neutral-900">
    <div class="app-bar-inner2 text-neutral-900 dark:text-white">
      {#if innerWidth < 953}
        <button class="menu-icon-outer" onclick={toggleOpen}>
          <MenuIcon open={open} />
        </button>
      {/if}
      <div class="header-logo-wrapper">
        <a class="header-logo text-neutral-900 dark:text-white" href="/">cgbuen</a>
      </div>
        {#if innerWidth >= 953}
          <div class="nav-tabs">
            {#each items as item, i}
              <a
                class="nav-tab text-neutral-900 dark:text-white {page.url.toString().includes(item.href) && !item.blank ? 'selected text-white' : ''}"
                href={item.href}
                target={item.blank ? '_blank' : ''}
              >
                {item.name}
              </a>
            {/each}
          </div>
        {/if}
    </div>
  </div>
</div>

<style>
  .app-bar-styled {
    height: 64px;
    position: relative;
    z-index: 999999;
  }
  .app-bar-inner {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    border-color: rgba(255, 255, 255, 0.12);
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1310;
  }
  .app-bar-inner2 {
    justify-content: space-between;
    padding: 0 15px;
    max-width: 960px;
    box-sizing: border-box;
    flex: 1;
    height: 64px;
    min-height: 64px;
    display: flex;
    position: relative;
    align-items: center;
  }
  @media (min-width: 900px) and (max-width: 950px) {
    .app-bar-inner2 {
      justify-content: center;
    }
  }
  .menu-icon-outer {
    padding: 12px;
  }
  .header-logo-wrapper {
    cursor: pointer;
    justify-content: left;
    margin-left: 0;
    margin-right: 10px;
  }
  @media (max-width: 899px) {
    .header-logo-wrapper {
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
    }
  }
  .header-logo {
    color: unset;
    display: block;
    font-size: 32px;
    font-weight: bold;
    line-height: 1;
    position: relative;
    text-decoration: underline;
    text-decoration-color: #69c;
    top: -4px;
  }
  .nav-tabs {
    display: flex;
    justify-content: center;
    position: relative;
  }
  .nav-tab {
    align-items: center;
    background-color: transparent;
    border-radius: 0;
    color: unset;
    cursor: pointer;
    display: flex;
    font-weight: bold;
    height: 64px;
    min-width: 115px;
    justify-content: center;
    text-decoration: none;
    text-transform: none;
    transition: 0.5s background-color ease-in-out;
  }
  .nav-tab.selected {
    background-color: #69c;
  }
  @media (max-width: 951px) {
    .nav-tab {
      min-width: 126px;
    }
  }
</style>
