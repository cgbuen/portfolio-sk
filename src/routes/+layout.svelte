<script lang="ts">
  import '../app.css'
  import {ColorSchemePicker, Drawer, Header, Footer} from '$lib/components'
  import {page} from '$app/state'
  import {setContext} from 'svelte'
  import KeyboardsModal from './keyboards/components/keyboards-modal.svelte'
  import KeysetsModal from './keyboards/components/keysets-modal.svelte'
  import SwitchesModal from './keyboards/components/switches-modal.svelte'
  import {activeKeyboard, activeKeyset, activeSwitchset} from '$lib/state'
  setContext('titleSuffix', ' — cgbuen')
  setContext('items', [
    {name: 'Software', href: '/software'},
    {name: 'Concerts', href: '/concerts'},
    {name: 'Keyboards', href: '/keyboards'},
    {name: 'About', href: '/about'},
    {name: 'Commissions', href: '/commissions'},
    {name: 'Resources', href: '/resources'},
    {name: 'Store', href: 'https://store.cgbuen.io/', blank: true},
  ])
  let menuOpen = $state(false)
  let toggleOpen = () => {
    menuOpen = !menuOpen
  }
  let {children} = $props()
  let cw = $state(0)
  let iw = $state(0)
</script>

<svelte:window bind:innerWidth={iw} />

<div
  class="body-inner {menuOpen ? 'open' : ''}"
  style="padding-right: {menuOpen ? iw - cw : 0}px"
>
  <Header open={menuOpen} {toggleOpen} />
  <div class="outer-wrapper" bind:clientWidth={cw}>
    <div class={page.data.isHome ? '' : 'page-wrapper'}>
      {@render children()}
    </div>
  </div>
  <Footer />
  <ColorSchemePicker />
  <Drawer open={menuOpen} {toggleOpen} />
  <KeyboardsModal {activeKeyboard} />
  <KeysetsModal {activeKeyset} />
  <SwitchesModal {activeSwitchset} />
</div>

<style>
  .open {
    height: 100%;
    overflow: hidden;
    position: absolute;
    width: 100%;
  }
  .outer-wrapper {
    position: relative;
  }
  .page-wrapper {
    margin: 0 auto;
    max-width: 960px;
    overflow: hidden;
    padding: 0 15px;
  }
</style>
