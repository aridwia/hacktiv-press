var jwt = require('jsonwebtoken');
require('dotenv').config()

var isLogin = (req,res,next) => {
  jwt.verify(req.headers.token, process.env.TKN_SECRET,function(err, decoded) {
    if (!err) {
      req.id = decoded.id,
      req.username = decoded.username,
      req.email = decoded.email,
      req.fullname = decoded.fullname
      console.log(req)
      next()
    } else {
      res.send(err)
    }
  })
}

module.exports = {isLogin};
