var colors = require('colors');

console.log("npm".white + ' ' + '200'.green + 'test'.red);

var express = require('express');
var app = express();

app.get('/a.jsp', function(req, res){
  res.send('Hello World');
});

app.listen(3000);