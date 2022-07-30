const path = require('path');

module.exports = {
  resolveLoader: {
    alias: {
      'pug-loader': '@webdiscus/pug-loader',
      //'pug-loader': path.join(__dirname, '../../'), // for local development only
    },
  },
  resolve: {
    alias: {
      './reveal': 'reveal.js/dist/reveal.js',
      './reveal-notes': 'reveal.js/plugin/notes/notes.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          method: 'render',
          doctype: 'html',
          plugins: [require('pug-plugin-ng')],
        },
      },

      /*{
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              esModule: false,
            },
          },
          {
            loader: 'pug-loader',
            options: {
              method: 'html',
              doctype: 'html',
              plugins: [require('pug-plugin-ng')],
            },
          },
        ],
      },*/

      // Process image resources in pug templates with webpack
      {
        test: /\.(png|jpg|jpeg)/,
        type: 'asset/resource',
      },
    ],
  },
};
