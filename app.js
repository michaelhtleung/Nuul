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

/*routes for viewing data from the database*/
app.get('/view/graphData/:userid', function (req, res) {
	dbFunctions.getGraphData(req.params.userid, (error, graphData) => {
		if (error) res.sendStatus(500);
		res.send(graphData);
	});
});

app.get('/view/achievementsData/:userid', function (req, res) {
	res.send('achievements');
});

app.get('/view/sensor/:serial', function (req, res) {
	dbFunctions.getSensor(req.params.serial, (error, document) => {
		if (error) res.status(404).send("requested sensor does not exist");
		res.send(document);
	});
});

/*routes for adding to the database*/
app.post('/add/sensor', function (req, res) {
	if (!req.query.serialNumber) res.status(400).send("no serial number specified");
	if (!req.query.brand) res.status(400).send("no brand specified");
	if (!req.query.userID) res.status(400).send("no user ID specified");

	dbFunctions.addSensor({
		serialNumber: req.query.serialNumber,
		brand: req.query.brand,
		userID: req.query.userID
	}, (error) => {
		if (error) res.status(500).send(error);
		res.status(201).send("successfully added new sensor");
	})
});

app.post('/add/session', function (req, res) {
	/*client time stamp format: YYYY-MM-DD-HH-MM-SS*/
	let timestampString;
	let startTime;
	let endTime;

	timestampString = req.query.startTime.split('-');
	startTime = {
		year: timestampString[0],
		month: Number(timestampString[1])-1, // re-index from 0 to 11 for moment.js
		day: timestampString[2],
		hour: timestampString[3],
		minute: timestampString[4],
		second: timestampString[5],
	};

	timestampString = req.query.endTime.split('-');
	endTime = {
		year: timestampString[0],
		month: Number(timestampString[1])-1, // re-index from 0 to 11 for moment.js
		day: timestampString[2],
		hour: timestampString[3],
		minute: timestampString[4],
		second: timestampString[5],
	};

	dbFunctions.addSession({
		startTime: startTime,
		endTime: endTime,
		serialNumber: req.query.serialNumber
	}, (error) => {
		if (error) res.status(500).send(error);
		res.status(201).send("successfully added new session");
	});
});

app.post('/addUser', function (req, res) {

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
