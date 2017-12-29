const path = require("path");

module.exports = {
	entry: "./index.js",
	output: {
		path: path.resolve("./build"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: 'svelte-loader'
			}
		]
	}
};
