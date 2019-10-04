const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
	_id: ObjectId,
	startTime: Date,
	endTime: Date,
	serialNumber: Number,
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;