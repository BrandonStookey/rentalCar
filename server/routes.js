var app = require('./server');
var path1 = require('path');
var public1 = path1.resolve('public') + '/';
var request = require('request');

// '/getCar/:destResult/:startDateResult/:endDateResult/:pickUpTimeResult/:dropOffTimeResult'
app.get('/getCar/:destResult/:MM/:DD/:YYYY/:EMM/:EDD/:EYYYY/:pickUpTimeResult/:dropOffTimeResult', function(req, res) {

	console.log('Hello, inside of routes!');

	var destResult = req.params.destResult;
	var startDateResult = req.params.MM + '/' + req.params.DD + '/' + req.params.YYYY;
	var endDateResult = req.params.EMM + '/' + req.params.EDD + '/' + req.params.EYYYY;
	var pickUpTimeResult = req.params.pickUpTimeResult;
	var dropOffTimeResult = req.params.dropOffTimeResult;

	console.log('startDateResult: ', startDateResult);
	console.log('endDateResult: ', endDateResult)

	request('https://api.hotwire.com/v1/search/car?apikey=qqvyj5fw2sbye5upjv7pu6c8&dest=' + destResult +'&startdate='+ startDateResult + '&enddate='+ endDateResult +'&pickuptime='+ pickUpTimeResult + '&dropofftime='+ dropOffTimeResult, function (error, response, body) {
			console.log(body);
			var result = body;

	  	console.log('RESULT: ', result);
	    res.status(200).send(body) ;
  	})
	})

// app.get('/', function(req, res){
// 	console.log('test res: ', res);

// 	res.send(200, 'success!');
// })