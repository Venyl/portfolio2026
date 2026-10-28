<script lang="ts">
	import favicon from '$lib/assets/favicon.ico';
	import '$lib/styles/reset.css';
	import '$lib/styles/global.css';
	import { m } from '$lib/paraglide/messages';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{m.page_title()}</title>
</svelte:head>

<main>
	<div>
		<h1>{page.status}</h1>
		<a href={resolve('/')}>
			<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24">
				<path d="M0 0h24v24H0z" fill="none" />
				<path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 12v.01M3 21h18M5 21V5a2 2 0 0 1 2-2h6m4 10.5V21m4-14h-7m3-3l-3 3l3 3"
				/>
			</svg>
			<span>{m.error_return()}</span>
		</a>
	</div>
</main>

<style>
	main {
		height: 100vh;
		height: 100svh;
		display: grid;
		place-items: center;

		/*--dot-size: 0.0625rem;
		--spacing: 1.25rem;
		--fade-out-start: 40%;
		--dot-color: var(--neutral-12);
		background-image:
			radial-gradient(ellipse at center, var(--neutral-14) var(--fade-out-start, transparent)),
			radial-gradient(circle at center, var(--dot-color) var(--dot-size), transparent 0);
		background-size:
			125% 150%,
			var(--spacing) var(--spacing);
		background-position: center, center;
		background-repeat: no-repeat, repeat;*/

		--dot-size: 0.0625rem;
		--spacing: 1.5rem;
		--dot-color: var(--neutral-12);
		background-image:
			radial-gradient(ellipse at center, var(--neutral-14) 4rem, transparent),
			radial-gradient(circle at center, var(--dot-color) var(--dot-size), transparent 0);
		background-size:
			100%,
			var(--spacing) var(--spacing);
		background-position: center, center;
		background-repeat: no-repeat, repeat;

		@media (width < 800px) {
			background-size:
				150% 60%,
				var(--spacing) var(--spacing);
		}
	}

	div {
		padding: 0 1rem;
		border-left: 0.1875em solid var(--teal-5);
	}

	h1 {
		font-size: 3rem;
		font-family: var(--font-mono);
	}

	a {
		display: flex;
		gap: 0.5rem;
		color: var(--teal-1);
		text-decoration: none;
	}

	:global(html[data-theme='light']) a {
		color: var(--teal-7);
	}
</style>
