module.exports = {
  entry: './src/main.jsx',
  output: {
    path: './public/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /config\.js?/, loader: 'transform?envify' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  }
};
