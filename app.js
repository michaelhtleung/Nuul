const express = require('express');
const app = express();
const port = 5000;

const dbFunctions = require("./lib/databaseFunctions.js");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/expressMongoExample', (err) => {
	if (err) {
		throw err;
	}
	console.log("Connected to database")
});

app.get('/view/graphData/:userid', function (req, res) {
	res.send('graph');
});

app.get('/view/achievementsData/:userid', function (req, res) {
	res.send('achievements');
});

app.get('/view/sensor/:serial', function (req, res) {
	dbFunctions.getSensorData(req.params.serial, (document) => {
		if (document) {
			res.send(document);
		} {
			res.status(404).send("requested sensor does not exist");
		}
	});
});

app.post('/add/sensor/:serial', function (req, res) {
});

app.post('/add/session', function (req, res) {
});

app.post('/addUser', function (req, res) {

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
