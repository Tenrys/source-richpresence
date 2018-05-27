const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
	entry: "./src/ts/renderer.ts",
	target: "electron-renderer",
	output: {
		filename: "renderer.js"
	}
})
