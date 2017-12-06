var express = require('express');
var vhost = require('vhost');
var path = require('path');

var app = express();

var resumeApp = express();
resumeApp.use(express.static(path.resolve(__dirname + '/resume')));

var blogApp = express();
resumeApp.use(express.static(path.resolve(__dirname + '/blog')));


app.use(vhost('read.bigleo.me', require('./read/index.js')));
app.use(vhost('uchat.bigleo.me', require('./uchat/index.js')));

app.use(vhost('*.liaozhibin.com', resumeApp));
app.use(vhost('liaozhibin.com', resumeApp));
// app.use(vhost('*.bigleo.me', blogApp));
app.use(vhost('blog.bigleo.me', blogApp));


app.listen(8080, function () {
  console.log('listening on 8080...')
});
