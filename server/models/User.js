const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'username harus di isi']
  },
  password:{
    type: String,
    required: [true, 'password harus di isi']
  },
  email:{
    type: String,
    required: [true, 'email harus di isi']
  },
  fullname:{
    type: String,
    required: [true, 'fullname harus di isi']
  },{
    timestamps: true
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User;
