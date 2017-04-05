module.exports = {
  entry: {
    app: './src/App.tsx',
  },
  output: {
    path: __dirname + "/dist/",
    filename: "[name].js",
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
  }
}
