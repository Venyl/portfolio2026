<script>
	import Project from './Project.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { slugify } from '$lib';
</script>

<h2 id={slugify(m.header_projects())}>{m.header_projects()}</h2>
<div class="grid grid-bg">
	<Project />
	<Project />
	<Project />
	<Project />
</div>

<style>
	h2 {
		font-family: var(--font-mono);
		text-align: center;
		margin-bottom: 1.5rem;
		font-size: 2.5rem;
		font-weight: 700;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 24rem), 1fr));
		gap: 3rem;
	}
</style>
