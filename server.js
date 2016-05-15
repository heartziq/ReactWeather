var express = require('express'); //import express api

//create my app
var app = express();
const PORT = process.env.PORT || 3000; //access ENVIRONMENT VARIABLE handled by node.js

//no port assigned, (means local: 3000)

//check if not http req, redirect to http - openWeatherMap (free plan) is http-only
app.use(function (req, res, next){
	if (req.headers['x-forwarded-proto'] === 'http'){
		next();
	} else {
		res.redirect('http://' + req.hostname + req.url);
	}
});

app.use(express.static('public')); //adds functionality to your express application
//specify the folder that I want to expose to the web server

app.listen(PORT, function (){
	console.log('Express Server is Up on port ' + PORT);
});
