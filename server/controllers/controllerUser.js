const User = require('../models/User')
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var jwt = require('jsonwebtoken');
require('dotenv').config()

var getallUser = (req,res) => {
  User.find({})
  .then(allUser => {
    res.send(allUser)
  })
  .catch(err => {
    res.send(err)
  })
}

var createUser = (req,res) => {
  let hash = bcrypt.hashSync(req.body.password,salt)
  User.create({
    username: req.body.username,
    password: hash,
    email: req.body.email,
    fullname: req.body.fullname,
  })
  .then(newUser => {
    res.send(newUser)
  })
  .catch(err => {
    res.send(err)
  })
}

var updateUser = (req,res) => {
  let hash = bcrypt.hashSync(req.body.password,salt)
  User.updateOne({_id: req.params.id},{
    username: req.body.username,
    password: hash,
    email: req.body.email,
    fullname: req.body.fullname,
  })
  .then(updateUser => {
    res.send(updateUser)
  })
  .catch(err => {
    res.send(err)
  })
}

var removeUser = (req,res) => {
  User.deleteOne({_id: req.params.id})
  .then(removeUser => {
    res.send(removeUser)
  })
  .catch(err => {
    res.send(err)
  })
}

var signIn = (req,res) => {
  User.findOne({username: req.body.username})
  .then(userSignin => {
    if (req.body.password, userSignin.password) {
      var token = jwt.sign({ id: userSignin._id, username: userSignin.username, email: userSignin.email, fullname: userSignin.fullname }, process.env.TKN_SECRET);
      res.send({msg: 'berhasil login', token: token})
    } else {
      res.send('password anda salah')
    }
  })
  .catch(err =>{
    res.send(err)
  })
}

module.exports = {getallUser,createUser,updateUser,removeUser,signIn};
