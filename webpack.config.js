const path = require('path');

const entry = './src/index.js';

const filename = 'vtranslit-schemes';
const libraryName = 'vTranslitSchemes';

const baseConfig = {
  entry,
  module: {
    loaders: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
      }
    }]
  }
};

const npmConfig = Object.assign({}, baseConfig, {

  output: {
    filename: `${filename}.npm.js`,
    library: libraryName,
    libraryExport: libraryName,
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist')
  }

});

module.exports = npmConfig;
