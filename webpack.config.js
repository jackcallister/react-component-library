var SCRIPT_NAME = process.env.npm_lifecycle_event

var exampleConfig = {
  entry: './example/src/index',
  output: {
    path: './example/lib',
    filename: 'index.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
}

var libConfig = {
  entry: './src/library',
  output: {
    library: 'Library',
    libraryTarget: 'umd',
    path: './lib',
    filename: 'library.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  externals: {
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    }
  }
}

module.exports = ( SCRIPT_NAME == 'build' || SCRIPT_NAME == 'prepublish' ) ? libConfig : exampleConfig;
