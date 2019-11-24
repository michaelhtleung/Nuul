const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	_id: String,
	userID: Number,
	name: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;