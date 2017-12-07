const path = require('path');

module.exports = {
  entry: ['./gitcommit.js'],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg|css)$/i,
        use: [
         { loader: 'url-loader', options: { limit: 8192 } }, 
         // limit => file.size =< 8192 bytes ? DataURI : File
         { loader: 'css-loader', options: { modules: true}},
         { loader: 'style-loader'}
        ]
      }
    ],
  },
};