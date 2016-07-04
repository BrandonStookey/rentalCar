var app = require('./server');
var path1 = require('path');
var public1 = path1.resolve('public') + '/';
var request = require('request');

app.get('/getCar/:destResult/:MM/:DD/:YYYY/:EMM/:EDD/:EYYYY/:pickUpTimeResult/:dropOffTimeResult', function(req, res) {

	var destResult = req.params.destResult;
	var startDateResult = req.params.MM + '/' + req.params.DD + '/' + req.params.YYYY;
	var endDateResult = req.params.EMM + '/' + req.params.EDD + '/' + req.params.EYYYY;
	var pickUpTimeResult = req.params.pickUpTimeResult;
	var dropOffTimeResult = req.params.dropOffTimeResult;

	request('https://api.hotwire.com/v1/search/car?apikey=qqvyj5fw2sbye5upjv7pu6c8&dest=' + destResult +'&startdate='+ startDateResult + '&enddate='+ endDateResult +'&pickuptime='+ pickUpTimeResult + '&dropofftime='+ dropOffTimeResult, function (error, response, body) {
		console.log(body);
		var result = body;
    res.status(200).send(body) ;
  })
});