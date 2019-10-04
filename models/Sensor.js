const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
	_id: ObjectId,
	serialNumber: Number,
	brand: String,
	userID: Number,
});

const Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;