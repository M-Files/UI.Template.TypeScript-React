const path = require("path");
const webpack = require('webpack');
const ReplaceBundleStringPlugin = require('replace-bundle-webpack-plugin');

/**
 * See: https://stackoverflow.com/a/72219174/1288184
 * The MD4 algorithm is not available anymore in Node.js 17+ (because of library SSL 3).
 * In that case, silently replace MD4 by the MD5 algorithm.
 */
const crypto = require('crypto');
try {
	crypto.createHash('md4');
} catch (e) {
	console.warn('Crypto "MD4" is not supported anymore by this Node.js version');
	const origCreateHash = crypto.createHash;
	crypto.createHash = (alg, opts) => {
		return origCreateHash(alg === 'md4' ? 'md5' : alg, opts);
	};
}

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