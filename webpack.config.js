const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		shellui: "./src/shellui.ts",
		"Base.dashboard": "./src/dashboards/base-dashboard/Base.dashboard.ts",

		/**
		 * #TEMPLATED_TODO - Change this to use your own dashboard(s).
		 */
		"Sample.dashboard": "./src/dashboards/sample-dashboard/Sample.dashboard.tsx",
	},
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
			mocha: "mocha/mocha.js",
		}
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	externals: {
		MFiles: "MFiles",
		ShellUIModule: "ShellUIModule",
		MFilesDashboard: "window"
	},
	plugins: []
};
