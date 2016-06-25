'use strict';

var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var db = require('./../db/db.js');
var bodyParser = require('body-parser');

var app = module.exports = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
// app.use(cors());

var routes = require('./routes');

app.use(express.static(__dirname + './../public/client'));

var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('Listening on port ' + port);
});

// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Access-Token, X-Key');
//   if (req.method == 'OPTIONS') {
//     res.status(200).end();
//   } else {
//     next();
//   }
// });
