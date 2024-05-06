const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  dateEarned: {
    type: Date,
    default: Date.now
  },
});

const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;
