const Sensor = require('../models/Sensor.js');
const Session = require('../models/Session.js');
const User = require('../models/User.js');

exports.getSensorData = (serialNumber, callback) => {
	Sensor.find({
		serialNumber: serialNumber
	}, (document) => {
		callback(null, document);
	});
};