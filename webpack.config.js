const path = require('path');

const autoprefixer = require('autoprefixer');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const WebpackMd5Hash = require('webpack-md5-hash');

const NODE_ENV = process.env.NODE_ENV;

const ENV_DEV = NODE_ENV === 'development';
const ENV_PROD = NODE_ENV === 'production';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

const loaders = {
  componentStyles: {
      test: /\.css$/,
      loader: 'style!css'
  },
  html: {
    test: /\.html$/,
    loader: 'raw'
  },
  typescript: {
    test: /\.ts$/,
    loader: 'ts',
    exclude: /node_modules/
  }
};

const config = module.exports = {};

config.resolve = {
  extensions: ['.ts', '.js'],
  modules: [
    path.resolve('.'),
    'node_modules'
  ]
};

config.module = {
  loaders: [
    loaders.typescript,
    loaders.html,
    loaders.componentStyles
  ]
};

config.plugins = [
  new DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
  }),
  new LoaderOptionsPlugin({
    debug: false,
    minimize: ENV_PROD
  })
];

config.postcss = [
  autoprefixer({ browsers: ['last 3 versions'] })
];


if (ENV_DEV || ENV_PROD) {
  config.entry = {
    main: ['./src/main.ts'],
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts'
  };

  config.output = {
    filename: '[name].js',
    path: path.resolve('./target'),
    publicPath: '/'
  };

  config.plugins.push(
    new CommonsChunkPlugin({
      name: ['vendor', 'polyfills'],
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      chunkSortMode: 'dependency',
      filename: 'index.html',
      hash: false,
      inject: 'body',
      template: './src/index.html'
    })
  );
}

if (ENV_DEV) {
  config.devtool = 'cheap-module-source-map';

  config.plugins.push(new ProgressPlugin());

  config.devServer = {
    contentBase: './src',
    historyApiFallback: true,
    host: HOST,
    port: PORT,
    stats: {
      cached: true,
      cachedAssets: true,
      chunks: true,
      chunkModules: false,
      colors: true,
      hash: false,
      reasons: true,
      timings: true,
      version: false
    }
  };
}

if (ENV_PROD) {
  config.devtool = 'source-map';
  config.output.filename = '[name].[chunkhash].js';
  config.plugins.push(
    new WebpackMd5Hash(),
    new UglifyJsPlugin({
        mangle: {
            keep_fnames: true,
            screw_ie8: true
        },
        compress: {
            dead_code: true,
            screw_ie8: true,
            unused: true,
            warnings: false
        }
    })
  );
}