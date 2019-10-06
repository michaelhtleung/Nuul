const mongoose = require('mongoose');
const moment = require('moment');

const Sensor = require('../models/Sensor.js');
const Session = require('../models/Session.js');
const User = require('../models/User.js');

/**
 * @function getGraphData
 * @description pulls information from the database to return session data on how often a user smokes
 * on each day of the week
 * @param {string} userID the ID of the smoker
 * @param {function} callback accepts two parameters, one for errors and the other for returning formatted graph data
 * as an int array that maps each day of the week to its respective frequency of smoking sessions of a given user, with
 * index 0 being for Sunday and index 6 being for Saturday
 */
exports.getGraphData = (userID, callback) => {
	Sensor.find({
		userID: userID
	}, (error, sensors) => {
		if (error) callback(error, null);
		let dayDistribution = [
			0, 0, 0,
			0, 0, 0,
			0
		];
		sensors.forEach( sensor => {
			Session
				.find({
					serialNumber: Number(sensor.serialNumber)
				})
				.lean()
				.then(sessions => {
					sessions.forEach(session => {
						// dayDistribution[session.startTime.day()]++;
						dayDistribution[session.startTime.getDay()]++;
					})
					callback(null, dayDistribution);
				})
				.catch(error => {
					callback(error, null);
				});
		});
			// Session.find({
			// 	serialNumber: Number(sensor.serialNumber)
			// }, (error, sessions) => {
			// 	if (error) callback(error, null);
			// 	sessions.forEach(session => {
			// 		dayDistribution[session.startTime.day()]++;
			// 	});
			// });
		// });
	});
};

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

exports.addSession = (session, callback) => {
	let timestamp;
	let startTime = moment().startOf('hour');
	let endTime = moment().startOf('hour');

	timestamp = session.startTime;
	startTime.set('year', timestamp.year);
	startTime.set('month', timestamp.month); // 0 to 11
	startTime.set('date', timestamp.day); // day of the month, 1 to 31
	startTime.set('hour', timestamp.hour);
	startTime.set('minute', timestamp.minute);
	startTime.set('second', timestamp.second);

	timestamp = session.endTime;
	endTime.set('year', timestamp.year);
	endTime.set('month', timestamp.month);
	endTime.set('date', timestamp.day);
	endTime.set('hour', timestamp.hour);
	endTime.set('minute', timestamp.minute);
	endTime.set('second', timestamp.second);

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