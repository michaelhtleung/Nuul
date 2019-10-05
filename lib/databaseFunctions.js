const mongoose = require('mongoose');
const moment = require('moment');

const Sensor = require('../models/Sensor.js');
const Session = require('../models/Session.js');
const User = require('../models/User.js');

exports.getSensor = (serialNumber, callback) => {
	Sensor.find({
		serialNumber: Number(serialNumber)
	}, (error, document) => {
		if (error) callback(error, null);
		callback(null, document);
	});
};

exports.addSensor = (sensor, callback) => {
	let sensorToSave = new Sensor ({
		_id: mongoose.Types.ObjectId(),
		serialNumber: sensor.serialNumber,
		brand: sensor.brand,
		userID: sensor.userID
	});

	/*method 1: with promises*/
	sensorToSave.save()
		.then( success => {
			console.log("sensor saved to database");
			callback(null);
		})
		.catch( fail => {
			throw fail;
	});

	/*method 2: with callbacks*/
	// sensorToSave.save( (error, document) => {
	// 	if (error) callback(error);
	// 	console.log("sensor saved to database");
	// 	callback(null);
	// });
};

exports.addSession = (session) => {
	let startTime = moment().startOf('hour');
	startTime.set('year', session.startYear);
	startTime.set('month', session.startMonth);
	startTime.set('day', session.startDay);
	startTime.set('hour', session.startHour);
	startTime.set('minute', session.startMinute);

	let endTime = moment().startOf('hour');
	endTime.set('year', session.endYear);
	endTime.set('month', session.endMonth);
	endTime.set('day', session.endDay);
	endTime.set('hour', session.endHour);
	endTime.set('minute', session.endMinute);

	let sessionToSave = new Session({
		_id: mongoose.Types.ObjectId(),
		startTime: startTime,
		endTime: endTime,
		serialNumber: session.serialNumber
	});

	sessionToSave.save( (error, document) => {
		if (error) callback(error);
		console.log("session saved to database");
		callback(null);
	});
};