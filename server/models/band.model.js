const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bandSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Band = mongoose.model('Band', bandSchema);

module.exports = Band;