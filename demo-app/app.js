var express = require('express');
var path = require('path');

var app = express();

var logger = require('./logger');
var counties = require('./routes/counties');
var weather = require('./routes/weather');

app.use(logger);
app.use('/counties', counties);
app.use('/weather', weather);

app.use("/", express.static(path.join(__dirname, 'public')));
app.get('/', function(request, response){
	response.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function(){
	console.log('Listening on port 3000');
});
