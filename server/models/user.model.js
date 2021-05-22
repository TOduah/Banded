const mongoose = require('mongoose');

// const User = mongoose.model('User', {
//     username: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true
//     }
// });

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
  }, {
    timestamps: true,
  });
  
  const User = mongoose.model('User', userSchema);

module.exports = User; 