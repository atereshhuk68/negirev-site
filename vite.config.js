// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	base: '/negirev-site/',
	resolve: {
		alias: {
			'@img': resolve(__dirname, 'src/img/'),
			'@fonts': resolve(__dirname, 'src/assets/fonts/'),
			'@modules': resolve(__dirname, 'src/js/modules/'),
		},
	},
	build: {
		rollupOptions: {
			input: {
				home: resolve(__dirname, 'index.html'),
			},
		},
	},
});
