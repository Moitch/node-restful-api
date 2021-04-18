const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  yearReleased: {
    type: Number
  },
  description: {
    type: String
  },
  rating: {
    type: String,
    enum: ["G", "PG", "PG-13", "A-14", "R", "M"]
  },
  gameCompany: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GameCompany'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Game', GameSchema);