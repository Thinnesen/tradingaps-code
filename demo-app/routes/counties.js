var express = require('express');
var request = require('request');

var router = express.Router();

function getJSON(url, callback){
  request({
    url: url,
    json: true
  }, function (error, response, body){
    if (!error && response.statusCode === 200) {
      callback(body);
    }
  });
}
router.get('/', function(request, response){
	getJSON("http://centraldedados.pt/concelhos.json", function (body){

		var county = body.map(function(item) {
		    return item.nome_concelho;
		});
		response.status(200).json(county.sort());
	});
});

module.exports = router;
