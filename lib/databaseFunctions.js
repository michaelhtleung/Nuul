const mongoose = require('mongoose');

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
	// 	if (error) throw error;
	// 	console.log("sensor saved to database");
	// 	callback(null);
	// });


};