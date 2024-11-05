const webpack = require('webpack');

module.exports = {
  webpack: (config, env) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'), // if needed
      buffer: require.resolve('buffer/'), // Add this line
      process: require.resolve('process/browser'), // Add this line
    };
    config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser', // Polyfill for process
        Buffer: ['buffer', 'Buffer'], // Polyfill for Buffer
      }),
    );
    return config;
  },
};
