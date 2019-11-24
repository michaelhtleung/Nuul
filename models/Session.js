const mongoose = require('mongoose');
/**
 * @module /models/Session
 * @description Database model
 *
 * Parameters:
 * _id: UUID of the session document
 * userID: UUID of the user smoking in the session
 * sensorID: UUID of the sensor that collected data during the session
 * location: Location tracked by PWA during the session.
 * startTime: Timestamp of when the session started
 * endTime: Timestamp of when the session ended. Should be exactly 30 minutes after the startTime.
 *
 * pressDown: An array of timestamps of when the sensor button was pressed down during the session.
 * pressDown.timestamp: Timestamp of when the sensor button was pressed down. Holding a button down should have no
 * effect compared to pressing it once.
 *
 * hasSmoked: A flag that is true if the user smoked at least once during the session. Otherwise, the flag is false.
 * hasSmokedPrediction: A flag that is true if the model predicted that the smoker would smoke during the session.
 * Otherwise the flag is false. This flag does not tell us if the model prediction was correct or not.
 */

const sessionSchema = new mongoose.Schema({
	_id: String,
	userID: String,
	sensorID: String,
	location: String,
	startTime: Date,
	endTime: Date,
	pressDown: [
		{
			timestamp: Date,
		}
	],
	hasSmoked: Boolean,
	hasSmokedPrediction: Boolean,
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;