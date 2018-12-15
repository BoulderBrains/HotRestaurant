// Dependencies
var express = require('express');
var path = require('path');

var app = express();
// Sets up the Express App
var app = express();
// var PORT = 3000;

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

var resInfo = [];
	
app.get('/testing', function (req, res) {
	resInfo = res.json(tableRes);
	console.log(resInfo);
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get('/reservation', function(req, res) {
    res.sendFile(path.join(__dirname, "index3.html"));
})

app.get('/table', function(req, res) {
    res.sendFile(path.join(__dirname, "index2.html"));
})

console.log(resInfo);
if (resInfo.length <= 5) {
	// do app.post to /api/reservations
	app.post("api/reservations", function( req, res) {
		var newReservation = req.body;

		// newReservation.routeName = newReservation.uniqueID;
		console.log(newReservation);
		tableRes.push(newReservation);
		res.json(newReservation);
	});
} else {
	//do app.post to /api/waitlist
	app.post("api/waitlist");
}

// Starts the server to begin listening
app.listen(3000, function () {
	console.log("Server started on port", 3000);
});