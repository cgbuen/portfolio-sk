<script lang="ts">
	import '../app.css'
	import Header from '$lib/header.svelte'
	import Footer from '$lib/footer.svelte'
  import Drawer from '$lib/drawer.svelte';
	import ColorSchemePicker from '../lib/color-scheme-picker.svelte'
	import { page } from '$app/state'
	import { setContext } from 'svelte'
	setContext('titleSuffix', ' — cgbuen')
	setContext('items', [
    { name: 'Software', href: '/projects' },
    { name: 'Concerts', href: '/photography' },
    { name: 'Keyboards', href: '/collection' },
    { name: 'About', href: '/about' },
    { name: 'Commissions', href: '/commissions' },
    { name: 'Resources', href: '/resources' },
    { name: 'Store', href: 'https://store.cgbuen.io/', blank: true },
  ])
	let menuOpen = $state(false)
	let toggleOpen = () => {
		menuOpen = !menuOpen
	}
	let { children } = $props()
</script>

 <div class="body-inner {menuOpen ? 'open' : ''}">
	<Header open={menuOpen} toggleOpen={toggleOpen} />
	<div class="outer-wrapper">
		<div class={page.data.isHome ? "" : "page-wrapper"}>
			{@render children()}
		</div>
	</div>
	<Footer />
	<ColorSchemePicker />
	<Drawer open={menuOpen} toggleOpen={toggleOpen} />
</div>

<style>
	.open	{
		height: 100%;
		overflow: hidden;
		position: absolute;
		padding-right: 15px;
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