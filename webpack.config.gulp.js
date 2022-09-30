const path = require("path");
const webpack = require('webpack');
const ReplaceBundleStringPlugin = require('replace-bundle-webpack-plugin');

module.exports = {
	mode: "development",
	// entry: "./src/shellui.ts",
	devtool: "cheap-source-map",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias: {
			mocha: "mocha/mocha.js"
		}
	},
	output: {
		filename: "[name].bundle.js",
		// path: path.resolve( __dirname, "dist" )
	},
	externals: {
		MFiles: "MFiles",
		ShellUIModule: "ShellUIModule",
		MFilesDashboard: "window"
	},
	plugins: [
		// es6-promise polyfill compile has Promise.prototype.catch/finally which doesn't work with Desktop
		new ReplaceBundleStringPlugin([{
			partten: /Promise.prototype.catch /g,
			replacement: function () {
				return 'Promise.prototype[\'catch\']';
			}
		},
		{
			partten: /Promise.prototype.finally /g,
			replacement: function () {
				return 'Promise.prototype[\'finally\']';
			}
		}])
	]
};