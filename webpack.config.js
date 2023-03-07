const path = require('path');

module.exports = {
  entry: './src/index.js', // Arquivo de entrada do seu aplicativo
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Arquivo de saída do seu aplicativo
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader', // Utiliza o loader do Babel para transpilar os arquivos
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Configura os presets do Babel
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Adiciona os loaders necessários para carregar arquivos CSS
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
