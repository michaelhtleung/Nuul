const express = require('express');
const app = express();
const port = 5000;
const path = require('path');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/expressMongoExample', (err) => {
	if (err) {
		throw err;
	}
	console.log("Connected to database")
});

app.get('/:id/graphData', function (req, res) {
	res.send('graph');
});

app.get('/:id/achievementsData', function (req, res) {
	res.send('achievements');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
