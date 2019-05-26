const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentModel = new Schema({
  comment: String,
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  restaurant: { type: Schema.Types.ObjectId, ref: 'restaurant' },
});

const Comment = mongoose.model('comment', commentModel);

module.exports = Comment;
