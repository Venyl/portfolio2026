<script lang="ts">
	import Contact from '$lib/components/Contact.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ProjectList from '$lib/components/ProjectList.svelte';
	import TechnologyList from '$lib/components/TechnologyList.svelte';
</script>

<div class="container dot-bg">
	<Hero />
</div>
<div class="container slashed-bg"></div>
<div class="container">
	<ProjectList />
</div>
<div class="container slashed-bg"></div>
<div class="container">
	<TechnologyList />
</div>
<div class="container slashed-bg"></div>
<Contact />

<style>
	.container {
		padding: 4rem 2rem;
		border-inline: var(--border);
	}

	.container.slashed-bg {
		padding: 0;
		height: 2rem;
		border: var(--border);

		&:last-of-type {
			border-bottom: none;
		}
	}
</style>
