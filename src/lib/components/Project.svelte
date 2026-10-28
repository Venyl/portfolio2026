<script lang="ts">
	import { m } from '$lib/paraglide/messages';

	type Props = {
		thumbnail: string;
		name: string;
		tag: string;
		description: string;
		url: string;
		repo: string;
	};

	const { thumbnail, name, tag, description, url, repo }: Props = $props();
</script>

<section>
	<div class="img-wrapper slashed-bg">
		<img src={thumbnail} alt="{name} thumbnail" width="549" height="299" />
	</div>
	<div class="body">
		<header>
			<h3>{name}</h3>
			<span>{tag}</span>
		</header>
		<p>{description}</p>
		<footer>
			<a href={url} rel="external" class="visit-btn btn-ghost">
				<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24">
					<path d="M0 0h24v24H0z" fill="none" />
					<g
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
					>
						<path d="M15 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" />
						<path d="M21 12H8l3-3m0 6l-3-3" />
					</g>
				</svg>

				{m.project_visit()}
			</a>
			<a href={repo} title={m.source_code()} rel="external" class="source-link btn-ghost"
				><svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em" viewBox="0 0 32 32">
					<path d="M0 0h32v32H0z" fill="none" />
					<path
						fill="currentColor"
						fill-rule="evenodd"
						d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.7 3.7 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2"
					/>
				</svg></a
			>
		</footer>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-wrap: wrap;
		border: 1px solid var(--neutral-13);
		background-color: var(--neutral-14);

		.img-wrapper {
			align-self: stretch;
			flex-grow: 1;
			min-width: 16rem;
			flex-basis: 0;
		}

		.body {
			flex-grow: 1;
		}
	}

	.img-wrapper {
		display: grid;
		place-items: center;
		padding: 1rem;

		img {
			border: 1px solid var(--neutral-13);
			aspect-ratio: 1.84;
			object-fit: cover;
			object-position: center;
		}
	}

	.body {
		display: grid;
		grid-template-rows: auto auto 1fr;
		gap: 1rem;
		padding: 1rem;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: var(--neutral-14);
	}

	h3 {
		font-size: 1.5rem;
		font-weight: 700;
	}

	span {
		font-family: var(--font-mono);
		min-width: max-content;
		border-radius: 0.25rem;
		font-size: 0.75rem;
		padding: 0 0.5em;
		color: var(--teal-1);
		border: 1px solid var(--teal-9);
		background-color: var(--teal-12);
	}

	:global(html[data-theme='light']) span {
		color: var(--teal-10);
		border-color: var(--teal-3);
		background-color: var(--teal-1);
	}

	p {
		color: var(--neutral-5);
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	/*.visit-btn {
	display: flex;
	}*/

	.source-link {
		padding: 0.25rem;
		color: inherit;
		border: none;
	}
</style>
