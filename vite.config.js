// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';
import htmlMinifier from 'vite-plugin-html-minifier'

export default defineConfig({
	base: '/negirev-site/',
	resolve: {
		alias: {
			'@fonts': resolve(__dirname, 'src/assets/fonts/'),
			'@modules': resolve(__dirname, 'src/js/modules/'),
		},
	},
	build: {
		rollupOptions: {
			input: {
				home: resolve(__dirname, 'index.html'),
				about: resolve(__dirname, 'about.html'),
				consultation: resolve(__dirname, 'consultation.html'),
			},
		},
	},
	plugins: [
    htmlMinifier({
      minify: true,
    }),
  ],
});
