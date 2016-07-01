'use strict';

var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = module.exports = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + './../public/client'));

var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('Listening on port ' + port);
});

