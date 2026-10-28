<script>
	import Project from './Project.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { slugify } from '$lib';
	import goodlife from '$lib/assets/projects/goodlife.jpg';
	import gamebox from '$lib/assets/projects/gamebox.jpg';
	import pocketdex from '$lib/assets/projects/pocketdex.jpg';
	import paletteGenerator from '$lib/assets/projects/palette-generator.jpg';
</script>

<h2 id={slugify(m.header_projects())}>{m.header_projects()}</h2>
<div class="grid grid-bg">
	<Project
		thumbnail={goodlife}
		name="GoodLife"
		tag={m.project_goodlife_tag()}
		description={m.project_goodlife_desc()}
		url="https://goodlifedogretreat.ca/"
		repo="https://github.com/Venyl"
	/>
	<Project
		thumbnail={pocketdex}
		name="PocketDex"
		tag={m.project_pocketdex_tag()}
		description={m.project_pocketdex_desc()}
		url="https://venyl.github.io/er-pocketdex/"
		repo="https://github.com/Venyl/er-pocketdex"
	/>
	<Project
		thumbnail={paletteGenerator}
		name={m.project_palette_name()}
		tag={m.project_palette_tag()}
		description={m.project_palette_desc()}
		url="https://venyl.github.io/dynamic-palette-generator/"
		repo="https://github.com/Venyl/dynamic-palette-generator"
	/>
	<Project
		thumbnail={gamebox}
		name="GameBox"
		tag={m.project_gamebox_tag()}
		description={m.project_gamebox_desc()}
		url="https://venyl-gamebox.netlify.app/"
		repo="https://github.com/Venyl"
	/>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 24rem), 1fr));
		gap: 3rem;
	}
</style>
