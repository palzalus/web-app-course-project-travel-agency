module.exports = {
	entry: __dirname + "/app/assets/scripts/app.js",
	output: {
		path: __dirname + "/app/temp/scripts/",
		filename: "app.js"
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
};