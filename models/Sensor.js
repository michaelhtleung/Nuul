const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const sensorSchema = new mongoose.Schema({
	_id: ObjectId,
	serialNumber: Number,
	brand: String,
	userID: Number,
});

const Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;