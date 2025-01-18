<script lang="ts">
  import {page} from '$app/state'
  import {getContext} from 'svelte'
  import {fade} from 'svelte/transition'

  interface Item {
    name: string
    href: string
    blank?: boolean
  }
  interface Props {
    open: boolean
    toggleOpen?: () => void
  }
  let items: Item[] = getContext('items')
  let {open, toggleOpen}: Props = $props()
</script>

<div class="drawer-wrapper">
  {#if open}
    <button
      aria-label="overlay"
      class="overlay"
      onclick={toggleOpen}
      in:fade={{duration: 150}}
      out:fade={{duration: 150}}
    ></button>
  {/if}
  <div class="drawer bg-neutral-900 {open ? 'open' : ''}">
    {#each items as item}
      <a
        class="item {page.url.toString().includes(item.href) && !item.blank
          ? 'selected text-white'
          : ''}"
        href={item.href}
        target={item.blank ? '_blank' : ''}
        onclick={toggleOpen}
      >
        {item.name}
      </a>
    {/each}
  </div>
</div>

<style>
  .overlay {
    background: rgba(0, 0, 0, 0.5);
    cursor: default;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
  }
  .drawer {
    height: 100%;
    left: -300px;
    padding-top: 64px;
    position: absolute;
    top: 0;
    transition: left 0.15s ease-in-out;
    width: 300px;
  }
  .drawer.open {
    left: 0;
  }
  .item {
    color: unset;
    display: block;
    font-size: 18px;
    font-weight: bold;
    padding: 21px;
    text-decoration: none;
  }
  .item.selected {
    background-color: #69c;
  }
</style>
