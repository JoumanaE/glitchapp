const mongoose = require('mongoose')

const shiftSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },  
    start_time: {
      type: Date, 
      required: true, 
      trim: true
      
    }, 
    end_time: {
      type: Date, 
      required: true, 
      trim: true 
      
    }, 
    createdBy:{
      type: mongoose.SchemaTypes.ObjectId,
      required: true, 
      ref: 'user'
    }, 
      list: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'list',
      required: true
    }
  },
  { timestamps: true }
)
shiftSchema.index({list: 1, start_date: 1, end_date: 1}, {unique: true})
const Shift = mongoose.model('shift', shiftSchema)
module.exports = Shift 
 