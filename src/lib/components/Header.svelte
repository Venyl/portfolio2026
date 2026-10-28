<script lang="ts">
	import { slugify } from '$lib';
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale, setLocale } from '$lib/paraglide/runtime';
	import { setTheme } from '$lib/remote/theme.remote';

	function toggleLanguage() {
		if (getLocale() === 'en') {
			setLocale('pl');
		} else {
			setLocale('en');
		}
	}

	async function toggleTheme({
		data,
		submit
	}: {
		data: { theme: 'dark' | 'light' };
		submit: () => Promise<boolean>;
	}) {
		document.documentElement.dataset.theme = data.theme;
		await submit();
	}
</script>

<header>
	<div class="container">
		<nav class="desktop-nav">
			<ul>
				<li><a href={`#${slugify(m.header_about())}`}>{m.header_about()}</a></li>
				<li><a href={`#${slugify(m.header_projects())}`}>{m.header_projects()}</a></li>
				<li><a href={`#${slugify(m.header_skills())}`}>{m.header_skills()}</a></li>
				<li><a href={`#${slugify(m.header_contact())}`}>{m.header_contact()}</a></li>
			</ul>
		</nav>

		<button
			class="mobile-nav-btn btn-ghost btn-no-border"
			title={m.header_nav()}
			popovertarget="mobile-nav"
			popovertargetaction="toggle"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
				<path d="M0 0h24v24H0z" fill="none" />
				<path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</button>

		<nav class="mobile-nav" id="mobile-nav" popover>
			<ul>
				<li><a href={`#${slugify(m.header_about())}`}>{m.header_about()}</a></li>
				<span class="dot"></span>
				<li><a href={`#${slugify(m.header_projects())}`}>{m.header_projects()}</a></li>
				<span class="dot"></span>
				<li><a href={`#${slugify(m.header_skills())}`}>{m.header_skills()}</a></li>
				<span class="dot"></span>
				<li><a href={`#${slugify(m.header_contact())}`}>{m.header_contact()}</a></li>
			</ul>
		</nav>

		<div class="actions">
			<form {...setTheme.enhance(toggleTheme)} class="theme-switcher">
				<button
					{...setTheme.fields.theme.as('submit', 'dark')}
					class="btn-sun btn-ghost btn-no-border"
					aria-label="{m.header_theme()} {m.header_theme_dark()}"
					title="{m.header_theme()} {m.header_theme_dark()}"
					><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
						<path d="M0 0h24v24H0z" fill="none" />
						<g
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						>
							<circle cx="12" cy="12" r="4" />
							<path
								d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
							/>
						</g>
					</svg>
				</button>
				<button
					{...setTheme.fields.theme.as('submit', 'light')}
					class="btn-moon btn-ghost btn-no-border"
					aria-label="{m.header_theme()} {m.header_theme_light()}"
					title="{m.header_theme()} {m.header_theme_light()}"
					><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
						<path d="M0 0h24v24H0z" fill="none" />
						<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
						/>
					</svg>
				</button>
			</form>

			<button class="btn-ghost btn-no-border" onclick={toggleLanguage} title={m.header_lang()}>
				<span class="sr-only" lang="en">Change language to polish</span>
				<span class="sr-only" lang="pl">Zmień język na polski</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
					<path d="M0 0h24v24H0z" fill="none" />
					<path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6"
					/>
				</svg>
			</button>

			<a href="mailto:dawid.gg13+portfolio@gmail.com" class="btn-primary">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1.125em"
					height="1.125em"
					viewBox="0 0 24 24"
				>
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
				{m.contact_me2()}
			</a>
		</div>
	</div>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		background-color: var(--neutral-14);
		z-index: 1;
		height: 4rem;
		border-bottom: var(--border);

		.container {
			padding: 1rem 2rem;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 1rem;
			border-inline: var(--border);
		}
	}

	ul {
		list-style: none;
		display: flex;
		gap: 1.5rem;
		color: var(--neutral-5);
	}

	li {
		transition: color 200ms;
		cursor: pointer;

		&:hover {
			color: var(--neutral-1);
		}

		a {
			color: inherit;
			text-decoration: none;
		}
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 0.75rem;

		button {
			align-self: stretch;
			padding: 0.375rem;
		}
	}

	:global(html[data-theme='dark']) {
		.btn-sun {
			display: none;
		}
	}

	:global(html[data-theme='light']) {
		.btn-moon {
			display: none;
		}
	}

	.mobile-nav-btn {
		anchor-name: --mobile-nav;
		display: none;

		svg {
			translate: 0 0.0625rem;
		}
	}

	.mobile-nav {
		display: none;
		position: fixed;
		position-anchor: --mobile-nav;
		left: anchor(left);
		top: calc(anchor(bottom) + 0.5rem);
		padding: 1rem;
		border: 1px solid var(--neutral-12);
		background-color: var(--neutral-14);

		ul {
			/*flex-direction: column;*/
			gap: 1rem;

			> div {
				display: flex;
				gap: 1rem;
			}
		}

		.dot {
			align-self: center;
			width: 0.25rem;
			aspect-ratio: 1;
			background-color: var(--teal-4);
		}
	}

	@media (width < 800px) {
		.desktop-nav {
			display: none;
		}

		.mobile-nav-btn {
			display: block;
		}

		.mobile-nav {
			display: revert;
		}
	}

	@media (width < 500px) {
		header .container {
			padding: 1rem;
		}

		.mobile-nav ul {
			flex-direction: column;

			.dot {
				display: none;
			}
		}
	}
</style>
