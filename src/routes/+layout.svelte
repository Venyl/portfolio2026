<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/reset.css';
	import '$lib/styles/global.css';
	import Header from '$lib/components/Header.svelte';
	import { m } from '$lib/paraglide/messages';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{m.page_title()}</title>
</svelte:head>

<div class="dot-bg">
	<Header />
	{@render children()}
</div>

<style>
	div {
		--spacing: 1.5rem;
		--fade-out-start: 55%;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			z-index: -1;
			inset: 0;
		}
	}

	:global(html[data-theme='light']) div {
		--dot-color: var(--neutral-9);
	}
</style>
