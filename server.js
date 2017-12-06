const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
// const db = require('./db');

const pg = require('pg');
const uri = 'postgres://yybfuqrz:vOxN9ub8Q5KMgc7RzAVRDl5LwNmolvaF@baasu.db.elephantsql.com:5432/yybfuqrz';


const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.use(express.static(__dirname + '/www'));

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

// pg.connect(uri, (err, client, done) => {
//   if (err)  {
//     console.log('Error connecting to database.');
//     throw new Error(err);
//   }
//   db.conn = client;
//   console.log('Connected to database..');
// });