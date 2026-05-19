<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
</script>

<div class="container hero-container">
	<Hero />
</div>
<div class="container slashed-separator"></div>

<style>
	.hero-container {
		--dot-size: 1px;
		--dot-spacing: 1.25rem;
		background-image:
			radial-gradient(ellipse at center, transparent, var(--neutral-14) 40%),
			radial-gradient(circle at center, var(--neutral-12) var(--dot-size), transparent 0);
		background-size:
			125% 150%,
			var(--dot-spacing) var(--dot-spacing);
		background-position: center, center;
		background-repeat: no-repeat, repeat;
	}

	.container {
		padding: 2rem;
		border-inline: var(--border);
	}

	.slashed-separator {
		padding: 0;
		height: 2rem;
		border: var(--border);
		background-image: repeating-linear-gradient(
			-45deg,
			transparent,
			transparent 4px,
			var(--neutral-13) 4px,
			var(--neutral-13) 5px
		);
	}
</style>
