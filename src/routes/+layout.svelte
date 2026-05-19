<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref, getLocale } from '$lib/paraglide/runtime';
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

<div>
	<Header />
	{@render children()}
</div>
