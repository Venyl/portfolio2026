import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['localStorage', 'cookie', 'preferredLanguage', 'baseLocale']
		})
	],
	server: {
		allowedHosts: ['uswtnf-ip-77-45-127-165.tunnelmole.net']
	}
});
