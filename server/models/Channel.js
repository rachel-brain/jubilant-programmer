// Or do I put the Channel choices in here rather than a String?!

const mongoose = require('mongoose');

const { Schema } = mongoose;

const channelSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Channel = mongoose.model('Channel', channelSchema);

module.exports = Channel;