var express = require('express');
 
var app = express();

app.get('/dinh', function (req, res) {
  res.send('hello Dinh Dinh');
});

app.get('/tuan', function (req, res) {
  res.send('hello Hoang Tuan');
});

app.get('/thang', function (req, res) {
  res.send('hello Long Thang');
});


var server=app.listen(process.env.PORT || 3000);
 
module.exports = app;
