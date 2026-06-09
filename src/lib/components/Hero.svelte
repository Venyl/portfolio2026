<script lang="ts">
	import { slugify } from '$lib';
	import { m } from '$lib/paraglide/messages.js';
	import { ParaglideMessage } from '@inlang/paraglide-js-svelte';
</script>

<div class="hero" id={slugify(m.header_about())}>
	<div class="greeting-container">
		<div class="greeting">{m.hero_greeting()} <span>{m.hero_my_name()}</span></div>
		<p class="short-about">
			<ParaglideMessage message={m.hero_short_about} inputs={{}}>
				{#snippet b({ children })}
					<span>{@render children?.()}</span>
				{/snippet}
			</ParaglideMessage>
		</p>
		<div class="buttons">
			<a class="btn-primary" href="mailto:dawid.gg13@gmail.com">
				<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24">
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

				{m.contact_me()}
			</a>
			<a class="btn-ghost" href="https://github.com/Venyl">
				<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 32 32">
					<path d="M0 0h32v32H0z" fill="none" />
					<path
						fill="currentColor"
						fill-rule="evenodd"
						d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.7 3.7 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2"
					/>
				</svg>

				GitHub
			</a>
		</div>
	</div>

	<div class="about-container">
		<div class="title">
			<h2 aria-label={m.hero_about_title()}>{m.hero_about_filename()}</h2>
			<div class="icons">
				<span
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="1.125em"
						height="1.125em"
						viewBox="0 0 24 24"
					>
						<path d="M0 0h24v24H0z" fill="none" />
						<g fill="none" fill-rule="evenodd">
							<path
								d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
							/>
							<path fill="currentColor" d="M3 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1" />
						</g>
					</svg>
				</span>
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="0.875em"
						height="0.875em"
						viewBox="0 0 24 24"
					>
						<path d="M0 0h24v24H0z" fill="none" />
						<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
						/>
					</svg>
				</span>
				<span
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="1.125em"
						height="1.125em"
						viewBox="0 0 24 24"
					>
						<path d="M0 0h24v24H0z" fill="none" />
						<g fill="none" fill-rule="evenodd">
							<path
								d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
							/>
							<path
								fill="currentColor"
								d="m12 13.414l5.657 5.657a1 1 0 0 0 1.414-1.414L13.414 12l5.657-5.657a1 1 0 0 0-1.414-1.414L12 10.586L6.343 4.929A1 1 0 0 0 4.93 6.343L10.586 12l-5.657 5.657a1 1 0 1 0 1.414 1.414z"
							/>
						</g>
					</svg>
				</span>
			</div>
		</div>
		<div class="content">
			{m.hero_about_content()}
		</div>
	</div>
</div>

<style>
	.hero {
		display: grid;
		gap: 2rem;
		grid-template-columns: repeat(2, 1fr);

		@media (width < 800px) {
			grid-template-columns: 1fr;
		}
	}

	.greeting-container {
		display: grid;
		gap: 1rem;
	}

	.greeting {
		font-size: 1.25rem;
		font-weight: 500;
		display: grid;

		span {
			font-size: 4rem;
			translate: -0.25rem;
			font-weight: 700;
			line-height: 0.875;
		}
	}

	.short-about {
		color: var(--neutral-5);
		max-width: 30ch;
	}

	.buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.about-container {
		background-color: var(--neutral-14);
		min-height: 20ex;
		font-family: var(--font-mono);
		border: 1px solid var(--neutral-12);

		.title {
			padding: 0.25rem 0.75rem 0;
			background-color: var(--neutral-13);
			font-size: 0.875rem;
			color: var(--neutral-5);
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 1rem;

			h2 {
				display: flex;
				box-sizing: content-box;
				background-color: var(--neutral-14);
				padding: 0.25rem 0.5rem;
				border-top-left-radius: 0.25rem;
				border-top-right-radius: 0.25rem;
			}
		}

		.content {
			text-wrap: balance;
			padding: 0.75rem;
			font-size: 0.875rem;
		}
	}

	.icons {
		translate: 0 -0.125rem;
		display: flex;
		gap: 1rem;

		span:nth-child(2) {
			translate: 0 2px;
		}
	}
</style>
