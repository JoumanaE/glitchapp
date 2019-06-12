const config = require('../config')
const User = require('../resources/user/user.model')
const jwt = require('jsonwebtoken') 


const newToken = user => {
  return jwt.sign({id: user.id}, config.secrets.jwt, {
    expiresIn: config.secrets.jwtExp
  })
}

module.exports = newToken 

const verifyToken = token => {
  new Promise((resolve, reject) => {
    jwt.verify(token, config.secrets.jwt, (err, payload) => {
      if (err) return reject(err)
      resolve(payload)
    })
  })

module.exports = verifyToken 
  
const signup = async(req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({message: 'Please add your email and password'})
  } 
  
  try{
    const user = await User.create
  }
}
}

// var m;
// try {
//     m = require(modulePath);
// } catch (e) {
//     if (e.code !== 'MODULE_NOT_FOUND') {
//         throw e;
//     }
//     m = backupModule;
// }