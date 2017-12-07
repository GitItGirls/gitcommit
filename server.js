const express = require('express');
const app = express();
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const gitHubController = require('./GitHubController');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/www'));

mongoose.connect('mongodb://candace:ilovetesting@ds133166.mlab.com:33166/githubs');

mongoose.connection.once('open', (err, success) => {
  if (err) console.log('Error not connected');
  console.log('Connected, yay!');
});

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/get', gitHubController.getGitHubs);

app.post('/create', gitHubController.createGitHub); //any post methods on student router, go to /student

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




