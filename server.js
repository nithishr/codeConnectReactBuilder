var path = require('path');
var express = require('express');
var rewrite = require('express-urlrewrite');

var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/resources', express.static(path.join(__dirname, 'public/resources')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(rewrite('/*', '/index.html'));
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/hallo', function(req, res){
res.send("sfdsdfas");
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
