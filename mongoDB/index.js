const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restaurant-api', { useNewUrlParser: true })
  .then(x => console.log(`connected to MongoDB! Database name: ${x.connections[0].name}`))
  .catch(error => console.log(`Could not connect ${error}`));

module.exports = mongoose;
