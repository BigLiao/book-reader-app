var connect = require('connect');
var serveStatic = require('serve-static');
var vhost = require('vhost');

var blogApp = connect();
blogApp.use(serveStatic('blog'));

var resumeApp = connect();
resumeApp.use(serveStatic('resume'));


var app = connect();

app.use(vhost('*.liaozhibin.com', resumeApp));
app.use(vhost('liaozhibin.com', resumeApp));
app.use(vhost('*.bigleo.me', blogApp));
app.use(vhost('bigleo.me', blogApp));

app.listen(80);
console.log('listening on 80...')