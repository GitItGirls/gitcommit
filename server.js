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

app.get('/githubauth', (req, res) => {
  const accessCode = req.query.code;
  res.cookie('cook', 'cook', {domain:'http://localhost:3000', httpOnly: false});
  
  request(`https://github.com/login/oauth/access_token?client_id=${client_id}&amp;client_secret=${client_secret}&amp;code=${accessCode}`, function (err, response, body) {
      const accessToken = body.split('=')[1].split('&')[0];
      console.log('access tocken accessed: ', accessToken);
      

      request.get({ url: 'https://api.github.com/user/emails?access_token=' + accessToken, headers: { 'User-Agent': 'Superer Shopperer' } }, function (err, response, body) {
          // console.log('body', body);
          const userEmail = JSON.parse(body)[0].email;
          console.log('email: ', userEmail)
          res.cookie('userEmail', userEmail);
          // res.send('hi');
          res.redirect('http://www.localhost:3000/');
          
      });

  })
})


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