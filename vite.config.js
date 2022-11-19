import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	resolve: {
		alias: {
			"three-nodes": "three/examples/jsm/nodes",
		}
	},
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['three', 'troika-three-text']
	}
};

export default config;
