const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
  username: String,
  password: String,
  email: String,
});

const User = mongoose.model('user', userModel);

module.exports = User;
