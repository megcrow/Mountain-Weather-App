/* eslint-disable */
const merge = require('webpack-merge');
const path = require('path');
// Plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
// Configs
const baseConfig = require('./webpack.base.config');

const prodConfiguration = env => {
	return merge([
		{
			optimization: {
				// runtimeChunk: 'single',
				// splitChunks: {
				//   cacheGroups: {
				//     vendor: {
				//       test: /[\\/]node_modules[\\/]/,
				//       name: 'vendors',
				//       chunks: 'all'
				//     }
				//   }
				// },
				minimizer: [new UglifyJsPlugin()]
			},
			plugins: [
				new MiniCssExtractPlugin(),
				new OptimizeCssAssetsPlugin(),
				new Visualizer({ filename: './statistics.html' })
			],
			output: {
				filename: '[name].bundle.js',
				path: path.resolve(__dirname, '../build')
			  }
		}
	]);
}

module.exports = env => {
	return merge(baseConfig(env), prodConfiguration(env));
}
