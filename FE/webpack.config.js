const path = require('path');

module.exports = {
  resolve: {
    extension: ['.js', '.json'],
    alias: {
      '~': path.resolve(__dirname, '/src'),
    },
  },
};
