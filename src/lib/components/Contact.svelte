<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { slugify } from '$lib';
</script>

<footer id={slugify(m.header_contact())}>
	<div class="container">
		<address>
			<div class="contact-section">
				<a href="mailto:dawid.gg13+portfolio@gmail.com"
					><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
						<path d="M0 0h24v24H0z" fill="none" />
						<g
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						>
							<path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
							<rect width="20" height="16" x="2" y="4" rx="2" />
						</g>
					</svg>
					dawid.gg13@gmail.com
				</a>
				<span class="dot"></span>
				<span
					><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
						<path d="M0 0h24v24H0z" fill="none" />
						<g
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						>
							<path
								d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
							/>
							<circle cx="12" cy="10" r="3" />
						</g>
					</svg>
					{m.contact_location()}
				</span>
			</div>
			<div class="links-section">
				<a href="https://github.com/Venyl" title="GitHub">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1.75em"
						height="1.75em"
						viewBox="0 0 24 24"
					>
						<path d="M0 0h24v24H0z" fill="none" />
						<path
							fill="currentColor"
							d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
						/>
					</svg>
				</a>
				<a href="https://github.com/Venyl" title="GitHub">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1.75em"
						height="1.75em"
						viewBox="0 0 32 32"
					>
						<path d="M0 0h32v32H0z" fill="none" />
						<path
							fill="currentColor"
							fill-rule="evenodd"
							d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.7 3.7 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2"
						/>
					</svg>
				</a>
			</div>
		</address>
	</div>
</footer>

<style>
	footer {
		background-color: var(--neutral-14);
		border-top: 1px solid var(--neutral-13);
	}

	.container {
		padding: 1rem 2rem;
		border-inline: 1px solid var(--neutral-13);
	}

	address {
		min-width: 280px;
		font-style: normal;
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		color: var(--neutral-4);

		div {
			display: flex;
			gap: 1rem;
			align-items: center;
			justify-items: start;

			&:last-of-type {
				justify-items: end;
				gap: 0.5rem;
			}
		}
	}

	.dot {
		width: 0.25rem;
		aspect-ratio: 1;
		background-color: var(--teal-4);
	}

	a,
	span {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	a {
		text-decoration: none;
		color: var(--neutral-4);
		transition: color 200ms;

		&:hover {
			color: var(--teal-3);
		}
	}

	:global(html[data-theme='light']) a:hover {
		color: var(--teal-6);
	}
</style>
