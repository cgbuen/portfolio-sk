<script lang="ts">
	import '../app.css';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	import ColorSchemePicker from '../components/color-scheme-picker.svelte';
	let { children } = $props();
</script>

 <div>
	<Header />
	<div class="outer-wrapper">
		<div class="">
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
</style>