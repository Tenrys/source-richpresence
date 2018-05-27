const path = require("path")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ElectronConnectPlugin = require("webpack-electron-connect-plugin")

let config = {
	devtool: "source-map",
	node: false,
	mode: "development",
	output: {
		filename: "renderer.js",
		path: path.resolve(__dirname, "../dist")
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json", ".vue", ".scss"],
		alias: {
			vue: "vue/dist/vue.js"
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.(html|ico)$/,
				loader: "file-loader?name=[name].[ext]"
			},
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				options: {
					appendTsSuffixTo: [/\.vue$/]
				}
			},
			{
				test: /\.scss$/,
				use: [
					"vue-style-loader",
					process.env.NODE_ENV !== "production" ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader", // translates CSS into CommonJS
					"sass-loader" // compiles Sass to CSS
				]
			}
		]
	},
	plugins: [
		// make sure to include the plugin!
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "[name].css",
		})
	]
}

for (let option of process.argv.slice(2)) {
	if (/^(-w|--watch(-\w*)?)$/gi.test(option.trim().toLowerCase())) {
		config.plugins.push(
			new ElectronConnectPlugin({ // --watch-poll
				type: "reload", // "reload" or "restart"
				options: {}
			})
		)
		break
	}
}

module.exports = config

