const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const config = {
  entry: {
    app: './src/App.tsx',
  },
  output: {
    path: __dirname + "/dist/",
    filename: "[name].[hash].js",
    libraryTarget: "umd",
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
      paths: [
        "/404.html"
      ],
    }),
  ]
}

module.exports = (env) => {
  if ("production" === env) {
    config.plugins.push(new CompressionPlugin())
  }
  return config;
}
