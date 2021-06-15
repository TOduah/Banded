const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
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

mongoose.connect(process.env.BANDER_DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
})

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
      },
      password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
      },

  }, {
    timestamps: true,
  });
  

userSchema.pre('save', function(next) {
    var user = this;
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(saltRounds, function(err, salt) {
        if (err) return next(err);


        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

      
            user.password = hash;
            next();
    });
});

});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


const User = mongoose.model('User', userSchema);
module.exports = User; 