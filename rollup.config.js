import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postCSS from 'rollup-plugin-postcss';
import postCSSModules from 'postcss-modules';

const cssExportMap = {};

export default {
	input: 'src/lib/index.js',
	output: {
		file: 'dist/bundle.js',
		format: 'cjs',
	},
	external: [
		'react'
	],
	plugins: [
		resolve(),
		postCSS({
			plugins: [
				postCSSModules({
					getJSON(id, exportTokens) {
						cssExportMap[id] = exportTokens;
					}
				}),
			],
			getExportNames: false,
			getExport (id) {
				return cssExportMap[id];
			},
			extract: 'dist/Component.css'
		}),
		commonjs(),
		babel({
			exclude: 'node_modules/**',
			presets: [
				'@babel/preset-env',
				'@babel/preset-react',
			],
		})
	]
};
