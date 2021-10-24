const mongoose = require('mongoose');

require('dotenv').config()

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/jubilantprogrammer'

console.log('DB URI', dbURI)

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
