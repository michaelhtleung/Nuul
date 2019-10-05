const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
	_id: ObjectId,
	userID: Number,
	name: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;