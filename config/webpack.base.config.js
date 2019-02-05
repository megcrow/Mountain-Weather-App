const path = require('path')
const webpack = require('webpack');
const merge = require("webpack-merge");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src/App.jsx');

module.exports = env => {
	const { PLATFORM, VERSION } = env;
	return merge([
			{
				entry: ['@babel/polyfill', APP_DIR],
				module: {
					rules: [
						{
							test: /\.js$|\.jsx$/,
							exclude: /node_modules/,
							use: {
								loader: 'babel-loader'
							}
						},
						{
							test: /\.scss$/,
							use: [
								PLATFORM === 'production'
									? MiniCssExtractPlugin.loader
									: 'style-loader',
								'css-loader',
								'sass-loader'
							]
						},
						{
							test: /\.css$/,  
							include: /node_modules/,  
							loaders: ['style-loader', 'css-loader'],
					   },
						{
							test: /\.(png|jpg|gif)$/,
							use: {
								loader: 'file-loader'
							},
						},
					]
				},
				plugins: [
					new HtmlWebpackPlugin({
						template: './src/index.html',
						filename: './index.html'
					}),
					new webpack.DefinePlugin({ 
						'process.env.VERSION': JSON.stringify(env.VERSION),
						'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
					})
				],
				output: {
					filename: '[name].bundle.js',
					path: path.resolve(__dirname, '../build/')
				}
		}
	])
};
