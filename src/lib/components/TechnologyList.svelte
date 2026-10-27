<script lang="ts">
	import angular from '$lib/assets/tech-icons/angular.svg';
	import api from '$lib/assets/tech-icons/api.svg';
	import css from '$lib/assets/tech-icons/css.svg';
	import drizzle from '$lib/assets/tech-icons/drizzle.svg';
	import express from '$lib/assets/tech-icons/express.svg';
	import git from '$lib/assets/tech-icons/git.svg';
	import html from '$lib/assets/tech-icons/html.svg';
	import javascript from '$lib/assets/tech-icons/javascript.svg';
	import nextjs from '$lib/assets/tech-icons/nextjs.svg';
	import nodejs from '$lib/assets/tech-icons/nodejs.svg';
	import react from '$lib/assets/tech-icons/react.svg';
	import rust from '$lib/assets/tech-icons/rust.svg';
	import sql from '$lib/assets/tech-icons/sql.svg';
	import svelte from '$lib/assets/tech-icons/svelte.svg';
	import tailwind from '$lib/assets/tech-icons/tailwind.svg';
	import typescript from '$lib/assets/tech-icons/typescript.svg';
	import vue from '$lib/assets/tech-icons/vue.svg';

	import { m } from '$lib/paraglide/messages.js';
	import { slugify } from '$lib';

	type Technology = {
		name: string;
		iconSrc: string;
		href: string;
	};

	const technologies: Technology[] = [
		{
			name: 'HTML',
			iconSrc: html,
			href: 'https://en.wikipedia.org/wiki/HTML'
		},
		{
			name: 'CSS',
			iconSrc: css,
			href: 'https://en.wikipedia.org/wiki/CSS'
		},
		{
			name: 'JavaScript',
			iconSrc: javascript,
			href: 'https://en.wikipedia.org/wiki/JavaScript'
		},
		{
			name: 'TypeScript',
			iconSrc: typescript,
			href: 'https://www.typescriptlang.org/'
		},
		{
			name: 'Node',
			iconSrc: nodejs,
			href: 'https://nodejs.org/'
		},
		{
			name: 'Git',
			iconSrc: git,
			href: 'https://git-scm.com/'
		},
		{
			name: 'Express',
			iconSrc: express,
			href: 'https://expressjs.com/'
		},
		{
			name: 'SQL',
			iconSrc: sql,
			href: 'https://en.wikipedia.org/wiki/SQL'
		},
		{
			name: 'REST',
			iconSrc: api,
			href: 'https://en.wikipedia.org/wiki/REST'
		},
		{
			name: 'Drizzle',
			iconSrc: drizzle,
			href: 'https://orm.drizzle.team/'
		},
		{
			name: 'React',
			iconSrc: react,
			href: 'https://react.dev/'
		},
		{
			name: 'Next.js',
			iconSrc: nextjs,
			href: 'https://nextjs.org/'
		},
		{
			name: 'Tailwind',
			iconSrc: tailwind,
			href: 'https://tailwindcss.com/'
		},
		{
			name: 'Angular',
			iconSrc: angular,
			href: 'https://angular.dev/'
		},
		{
			name: 'Svelte',
			iconSrc: svelte,
			href: 'https://svelte.dev/'
		},
		{
			name: 'Vue',
			iconSrc: vue,
			href: 'https://vuejs.org/'
		},
		{
			name: 'Rust',
			iconSrc: rust,
			href: 'https://rust-lang.org/'
		}
	];
</script>

<div class="dot-bg">
	<h2 id={slugify(m.header_skills())}>{m.header_skills()}</h2>
	<div class="flex">
		{#each technologies as technology (technology.name)}
			<a class="technology" href={technology.href} rel="external" target="_blank">
				<img src={technology.iconSrc} alt={`${technology.name} icon`} width="32" height="32" />
				{technology.name}
			</a>
		{/each}
	</div>
</div>

<style>
	.dot-bg {
		--fade-out-start: 60%;
	}

	.flex {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.technology {
		display: grid;
		grid-template-columns: 2rem auto;
		align-items: center;
		padding: 0.5rem 1rem;
		gap: 0.5rem;
		background-color: var(--neutral-14);
		border: 1px solid var(--neutral-12);
		color: inherit;
		text-decoration: none;
		transition:
			border-color 500ms,
			scale 500ms;

		&:hover {
			scale: 1.05;
			transition: scale 200ms;
			border-color: var(--teal-3);
		}
	}

	:global(html[data-theme='light']) .technology:hover {
		border-color: var(--teal-6);
	}

	img {
		filter: grayscale(1) contrast(0) brightness(1.5);
	}

	:global(html[data-theme='light']) img {
		filter: grayscale(1) contrast(0) brightness(0.5);
	}
</style>
