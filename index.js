// Dependencies
var express = require('express');

var app = express();
// Sets up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Table reservation 
var tableRes = [
	{
		name: "",
		phoneNumber: "",
		email: "",
		uniqueID: ""
	}
];
	

// Starts the server to begin listening
app.listen(PORT, function () {
	console.log("Server started on port", PORT);
});