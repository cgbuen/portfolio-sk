<script lang="ts">
	import '../app.css'
	import Header from '$lib/header.svelte'
	import Footer from '$lib/footer.svelte'
	import ColorSchemePicker from '../lib/color-scheme-picker.svelte'
	import { page } from '$app/state'
	import { setContext } from 'svelte'
	setContext('titleSuffix', ` — cgbuen`)
	let { children } = $props()
</script>

 <div class="body-inner">
	<Header />
	<div class="outer-wrapper">
		<div class={page.data.isHome ? "" : "page-wrapper"}>
			{@render children()}
		</div>
	</div>
	<Footer />
	<ColorSchemePicker />
</div>

<style>
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