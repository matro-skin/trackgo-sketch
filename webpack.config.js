const path = require("path");
const fs = require("fs");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

function generateHtmlPlugins(templateDir) {
	const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
	return templateFiles.map(item => {
		const parts = item.split(".");
		const name = parts[0];
		const extension = parts[1];
		return new HtmlWebpackPlugin({
			filename: `${name}.html`,
			template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
			inject: false
		});
	});
}

// const htmlPlugins = generateHtmlPlugins("./src/html/views");
const htmlPlugins = generateHtmlPlugins("./src/html");

const config = {
	entry: ["./src/js/app.js", "./src/scss/app.scss"],
	output: {
		filename: "./js/app.js"
	},
	devtool: "source-map",
	mode: "production",
	optimization: {
		minimizer: [
			new TerserPlugin({
				sourceMap: true,
				extractComments: true
			})
		]
	},
	module: {
		rules: [
			{
				test: /\.(sass|scss)$/,
				include: path.resolve(__dirname, "src/scss"),
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {}
					},
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
							url: false
						}
					},
					{
						loader: "postcss-loader",
						options: {
							ident: "postcss",
							sourceMap: true,
							plugins: () => [
								require("cssnano")({
									preset: [
										"default",
										{
											discardComments: {
												removeAll: true
											}
										}
									]
								})
							]
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}
				]
			},
			// {
			// 	test: /\.html$/,
			// 	include: path.resolve(__dirname, "src/html/includes"),
			// 	use: ["raw-loader"]
			// },
            // {
            //     test: /\.html$/,
            //     include: path.resolve(__dirname, "src/html/components"),
            //     use: ["raw-loader"]
            // },
			{
				test: /\.html$/,
				include: path.resolve(__dirname, "src/html"),
				use: ["raw-loader"]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		},
		extensions: ['*', '.js', '.vue', '.json']
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: "./css/app.css"
		}),
		new CopyWebpackPlugin([
			{
				from: "./src/fonts",
				to: "./fonts"
			},
			{
				from: "./src/img",
				to: "./img"
			},
			{
				from: "./src/svg",
				to: "./svg"
			}
		])
	].concat(htmlPlugins)
};

module.exports = (env, argv) => {
	if (argv.mode === "production") {
		config.plugins.push(new CleanWebpackPlugin());
	}
	return config;
};
