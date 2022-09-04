const path = require('path');

export default {
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {},
  },
  server: {
    port: 8080,
    hot: true,
  },
};
