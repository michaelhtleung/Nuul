const express = require('express');
const app = express();
const port = 5000;

const dbFunctions = require("./lib/databaseFunctions.js");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hackthenorth2019', (err) => {
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
	dbFunctions.getSensor(req.params.serial, (error, document) => {
		if (document) res.send(document);
		res.status(404).send("requested sensor does not exist");
	});
});

app.post('/add/sensor', function (req, res) {
	dbFunctions.addSensor({
		serialNumber: req.query.serialNumber,
		brand: req.query.brand,
		userID: req.query.userID
	}, (error) => {
		if (error) throw error;
		res.send("successfully added new sensor");
	})
});

app.post('/add/session', function (req, res) {
});

app.post('/addUser', function (req, res) {

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
