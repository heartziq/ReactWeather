var express = require('express'); //import express api

//create my app
var app = express();

app.use(express.static('public')); //adds functionality to your express application
//specify the folder that I want to expose to the web server
app.listen(3000, function (){
	console.log('Express Server is Up on port 3000');
});