const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
	_id: String,
	serialNumber: Number,
	brand: String,
	userID: String,
});

const Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;