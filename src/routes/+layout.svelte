<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	import '$lib/styles/reset.css';
	import '$lib/styles/global.css';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div>
	<Header />
	{@render children()}
</div>
