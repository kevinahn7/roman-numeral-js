const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: "./src/main.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	devtool: "eval-source-map",
	devServer: {
		contentBase: "./dist"
	},
	plugins: [
		new UglifyJsPlugin({ sourceMap: true }),
		new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Roman',
      template: './src/index.html',
      inject: 'body'
    })
  ],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader"
				]
			},
			{
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
            	name: '[name].[ext]'
            }
          }
        ]
      },
			{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
		]
	}
};
