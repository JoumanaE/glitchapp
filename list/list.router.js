const express = require('express')
const controllers = require('./list.controllers')



const router = express.Router()

router 
  .route('/')
  .get(controllers.getOne)
  .post(controllers.createOne)

router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)


module.exports = router  

