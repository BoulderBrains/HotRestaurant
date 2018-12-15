// Dependencies
var express = require('express');

// Sets up the Express App
var app = express();
var PORT = 3000;


// Starts the server to begin listening
app.listen(PORT, function () {
	console.log("Server started on port", PORT);
});