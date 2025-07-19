const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@shared': path.resolve(__dirname, 'shared'),
      '@assets': path.resolve(__dirname, 'public')
    },
    configure: (webpackConfig) => {
      // Disable react-refresh for now to avoid conflicts
      webpackConfig.plugins = webpackConfig.plugins.filter(
        plugin => plugin.constructor.name !== 'ReactRefreshPlugin'
      );
      return webpackConfig;
    }
  }
};
