const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.join(__dirname, '/public/js'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '/public/'),
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                "transform-react-jsx",
              ]
            }
          }
        ]
      }
    ]
  }
}
