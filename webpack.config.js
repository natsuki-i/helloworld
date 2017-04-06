const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
  entry: {
    app: './src/App.tsx',
  },
  output: {
    path: __dirname + "/dist/",
    filename: "[name].[hash].js",
    libraryTarget: "commonjs-module",
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      }
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin({
      crawl: true,
    }),
  ]
}
