const mongoose = require('mongoose');

const { Schema } = mongoose;

const restaurantModel = new Schema({
  name: String,
  address: {
    street: String,
    number: Number,
    cep: String,
  },
  image: String,
});

const Restaurant = mongoose.model('restaurant', restaurantModel);

module.exports = Restaurant;
