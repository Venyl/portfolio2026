<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ProjectList from '$lib/components/ProjectList.svelte';
</script>

<div class="container dot-bg">
	<Hero />
</div>
<div class="container slashed-bg"></div>
<div class="container">
	<ProjectList />
</div>
<div class="container slashed-bg">
    
</div>

<style>
	.container {
		padding: 2rem;
		border-inline: var(--border);
	}

	.container.slashed-bg {
		padding: 0;
		height: 2rem;
		border: var(--border);
	}
</style>
